// Generates resized WebP variants of every image in public/images, the
// social-share image, and the manifest the next/image loader reads.
//
// Runs before every build. Variants are named after a hash of their source, so
// an unchanged image costs one hash and no encoding, and a replaced image gets
// fresh variants even when it keeps its file name.

import { createHash } from "node:crypto";
import { access, mkdir, readFile, readdir, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { socialImageFileName, targetWidths, variantFileName } from "../src/lib/image-variants.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONFIG_PATH = path.join(ROOT, "image-variants.config.json");
const TEMP_SUFFIX = ".tmp";
const EXIF_ROTATED_ORIENTATIONS = new Set([5, 6, 7, 8]);
const MANIFEST_INDENT = 2;

class ImageOptimizationError extends Error {
  constructor(file, step, cause) {
    super(`${file}: ${step} failed: ${cause.message}`, { cause });
    this.name = "ImageOptimizationError";
    this.file = file;
    this.step = step;
  }
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

/** Writes through a temp file so an interrupted run never leaves a truncated variant. */
async function writeAtomically(pipeline, destination) {
  const temp = `${destination}${TEMP_SUFFIX}`;
  await pipeline.toFile(temp);
  await rename(temp, destination);
}

async function optimizeImage(fileName, config, outputDir) {
  const sourcePath = path.join(ROOT, config.sourceDir, fileName);

  let buffer;
  let metadata;
  try {
    buffer = await readFile(sourcePath);
    metadata = await sharp(buffer).metadata();
  } catch (error) {
    throw new ImageOptimizationError(fileName, "reading the source", error);
  }

  const rotated = EXIF_ROTATED_ORIENTATIONS.has(metadata.orientation);
  const width = rotated ? metadata.height : metadata.width;
  const height = rotated ? metadata.width : metadata.height;
  const hash = createHash("sha1").update(buffer).digest("hex");
  const widths = targetWidths(width, [...config.deviceSizes, ...config.imageSizes]);

  const variants = {};
  const files = [];
  let generated = 0;
  for (const variantWidth of widths) {
    const variantName = variantFileName(fileName, hash, variantWidth);
    const destination = path.join(outputDir, variantName);
    if (!(await exists(destination))) {
      try {
        await writeAtomically(
          sharp(buffer).rotate().resize({ width: variantWidth, withoutEnlargement: true }).webp({ quality: config.webpQuality }),
          destination,
        );
      } catch (error) {
        throw new ImageOptimizationError(fileName, `encoding the ${variantWidth}px variant`, error);
      }
      generated += 1;
    }
    variants[String(variantWidth)] = `${config.publicOutputPrefix}/${variantName}`;
    files.push(variantName);
  }

  return { key: `${config.publicSourcePrefix}/${fileName}`, entry: { width, height, variants }, files, generated };
}

async function buildSocialImage(config, outputDir) {
  const { source, output, width, height, jpegQuality } = config.openGraph;

  let buffer;
  try {
    buffer = await readFile(path.join(ROOT, config.sourceDir, source));
  } catch (error) {
    throw new ImageOptimizationError(source, "reading the social-share source", error);
  }

  const fileName = socialImageFileName(output, createHash("sha1").update(buffer).digest("hex"));
  const destination = path.join(outputDir, fileName);
  let generated = 0;
  if (!(await exists(destination))) {
    try {
      await writeAtomically(
        sharp(buffer).rotate().resize({ width, height, fit: "cover" }).jpeg({ quality: jpegQuality, mozjpeg: true }),
        destination,
      );
    } catch (error) {
      throw new ImageOptimizationError(source, "building the social-share image", error);
    }
    generated = 1;
  }
  return { fileName, publicPath: `${config.publicOutputPrefix}/${fileName}`, generated };
}

async function main() {
  const config = JSON.parse(await readFile(CONFIG_PATH, "utf8"));
  const outputDir = path.join(ROOT, config.outputDir);
  await mkdir(outputDir, { recursive: true });

  // One image at a time, no cache: the build host has 256 MB.
  sharp.concurrency(1);
  sharp.cache(false);

  const sourceFiles = (await readdir(path.join(ROOT, config.sourceDir), { withFileTypes: true }))
    .filter((entry) => entry.isFile() && config.sourceExtensions.includes(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort();

  const images = {};
  const expected = new Set();
  const failures = [];
  let generated = 0;

  for (const fileName of sourceFiles) {
    try {
      const result = await optimizeImage(fileName, config, outputDir);
      images[result.key] = result.entry;
      result.files.forEach((file) => expected.add(file));
      generated += result.generated;
    } catch (error) {
      if (!(error instanceof ImageOptimizationError)) throw error;
      // The loader serves the original for anything missing from the manifest,
      // so one bad image costs speed on that image, not the whole publish.
      failures.push(error);
    }
  }

  let socialImage = null;
  try {
    const result = await buildSocialImage(config, outputDir);
    socialImage = result.publicPath;
    expected.add(result.fileName);
    generated += result.generated;
  } catch (error) {
    if (!(error instanceof ImageOptimizationError)) throw error;
    failures.push(error);
  }

  const stale = (await readdir(outputDir)).filter((file) => !expected.has(file));
  await Promise.all(stale.map((file) => rm(path.join(outputDir, file))));

  await writeFile(path.join(ROOT, config.manifestPath), `${JSON.stringify({ socialImage, images }, null, MANIFEST_INDENT)}\n`);

  console.log(
    `optimize-images: ${sourceFiles.length} sources, ${expected.size} outputs (${generated} encoded this run, ${stale.length} stale removed)`,
  );
  failures.forEach((failure) => console.warn(`optimize-images: WARNING ${failure.message}; serving the original instead`));
}

await main();

// Pure rules shared by the build-time image optimizer and the next/image loader.

const HASH_LENGTH = 8;
const VARIANT_EXTENSION = ".webp";

/**
 * The widths to generate for one source image: every configured width narrower
 * than the image, plus the image's own width capped at the widest configured
 * size, so nothing is ever upscaled.
 */
export function targetWidths(sourceWidth, configuredWidths) {
  if (!Number.isInteger(sourceWidth) || sourceWidth <= 0) {
    throw new RangeError(`targetWidths: sourceWidth must be a positive integer, got ${sourceWidth}`);
  }
  if (configuredWidths.length === 0) {
    throw new RangeError("targetWidths: no widths configured");
  }
  const sorted = [...configuredWidths].sort((a, b) => a - b);
  const widest = sorted[sorted.length - 1];
  const narrower = sorted.filter((width) => width < sourceWidth);
  return [...new Set([...narrower, Math.min(sourceWidth, widest)])];
}

/** `hero.jpg` with hash `1a2b3c4d…` at 640px becomes `hero.1a2b3c4d-640.webp`. */
export function variantFileName(sourceFileName, contentHash, width) {
  const dot = sourceFileName.lastIndexOf(".");
  const stem = dot > 0 ? sourceFileName.slice(0, dot) : sourceFileName;
  return `${stem}.${contentHash.slice(0, HASH_LENGTH)}-${width}${VARIANT_EXTENSION}`;
}

/** `og-default.jpg` built from a source with hash `1a2b3c4d…` becomes `og-default.1a2b3c4d.jpg`. */
export function socialImageFileName(outputFileName, contentHash) {
  const dot = outputFileName.lastIndexOf(".");
  if (dot <= 0) {
    throw new RangeError(`socialImageFileName: "${outputFileName}" needs a file extension`);
  }
  return `${outputFileName.slice(0, dot)}.${contentHash.slice(0, HASH_LENGTH)}${outputFileName.slice(dot)}`;
}

/**
 * The variant to serve for a requested width: the narrowest one that is at
 * least as wide, or the widest available when the request exceeds them all.
 * Returns null when there are no variants, so the caller can fall back.
 */
export function pickVariant(variants, requestedWidth) {
  const widths = Object.keys(variants)
    .map(Number)
    .sort((a, b) => a - b);
  if (widths.length === 0) return null;
  const match = widths.find((width) => width >= requestedWidth) ?? widths[widths.length - 1];
  return variants[String(match)];
}

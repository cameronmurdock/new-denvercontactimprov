import type { ImageLoaderProps } from "next/image";
import manifest from "./image-manifest.json";
import { pickVariant } from "./image-variants.mjs";

type ManifestEntry = {
  width: number;
  height: number;
  variants: Record<string, string>;
};

const entries = manifest.images as Record<string, ManifestEntry>;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Maps a source image and a requested width to a pre-generated WebP variant.
 * The site is a static export, so there is no image server: variants are built
 * by scripts/optimize-images.mjs and looked up here. An image the manifest does
 * not know (the optimizer skipped or failed it) is served as the original.
 */
export default function imageLoader({ src, width }: ImageLoaderProps): string {
  const key = basePath && src.startsWith(basePath) ? src.slice(basePath.length) : src;
  const entry = entries[key];
  if (!entry) return src;
  const variant = pickVariant(entry.variants, width);
  return variant ? `${basePath}${variant}` : src;
}

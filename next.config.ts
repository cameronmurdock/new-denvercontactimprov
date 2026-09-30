import type { NextConfig } from "next";
import path from "node:path";
import imageVariants from "./image-variants.config.json";

// Set only for Builder preview builds, which are served under a URL
// prefix. Empty for published builds, which are served at the domain root.
const previewBasePath = process.env.PREVIEW_BASE_PATH ?? "";
const basePath = previewBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  // A static export has no image server, so next/image asks the loader for
  // variants that scripts/optimize-images.mjs generated before the build.
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: imageVariants.deviceSizes,
    imageSizes: imageVariants.imageSizes,
  },
};

export default nextConfig;

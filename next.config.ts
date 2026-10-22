import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Default ladder ends 2048 → 3840. A detail figure is ~1340 CSS px
    // (~2700 at 2x), so the browser was requesting w=3840.
    deviceSizes: [640, 828, 1080, 1280, 1536, 1920, 2560],
    imageSizes: [256, 384, 512],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

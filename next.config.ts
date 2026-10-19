import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // pin the workspace root (a stray lockfile in the user folder otherwise confuses tracing)
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

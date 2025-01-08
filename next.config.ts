import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  experimental: {
    turbo: {
      rules: {
        "**/*.glsl": {
          loaders: ["raw-loader"],
          as: "*.js",
        },
        "**/*.vert": {
          loaders: ["raw-loader"],
          as: "*.js",
        },
        "**/*.frag": {
          loaders: ["raw-loader"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;

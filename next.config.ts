import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: isProd ? "/pj-portfolio" : "",
  assetPrefix: isProd ? "/pj-portfolio/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/pj-portfolio" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

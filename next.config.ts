import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: isProd ? "/pj-portfolio2" : "",
  assetPrefix: isProd ? "/pj-portfolio2/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/pj-portfolio2" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

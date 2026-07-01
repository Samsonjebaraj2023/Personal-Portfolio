import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/samson-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

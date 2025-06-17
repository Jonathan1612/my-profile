import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: `/my-profile`,
  assetPrefix: `/my-profile/`,
  trailingSlash: true,
};

export default nextConfig;

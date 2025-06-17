import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: `/my-profile`,
  assetPrefix: `/my-profile/`,
};

export default nextConfig;

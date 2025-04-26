import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://loodibee.com/wp-content/uploads/**')]
  }
};

export default nextConfig;

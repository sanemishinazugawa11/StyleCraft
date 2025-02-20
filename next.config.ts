import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' }
    ]
  }
};

export default nextConfig;

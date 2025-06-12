import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow any domain
      },
      {
        protocol: 'http',
        hostname: '**', // Optional: allow http too (not recommended for production)
      },
    ],
  },
};

export default nextConfig;

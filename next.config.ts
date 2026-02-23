import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  output: 'standalone',

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    optimizePackageImports: ['lucide-react'],
  },

  images: {
    remotePatterns: [
      // NOTE: Modify according to the project
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.example.com',
      // },
    ],
  },
};

export default nextConfig;

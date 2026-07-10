import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
<<<<<<< HEAD
      { protocol: "https", hostname: "images.unsplash.com" },
=======
>>>>>>> 5d840ee (update ui)
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["ba53-181-79-83-76.ngrok-free.app"],
};

export default nextConfig;
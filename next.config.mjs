/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
    ];
  },
};

export default nextConfig;

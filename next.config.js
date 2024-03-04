/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  distDir: "out",
  output:"export"
};

module.exports = nextConfig;

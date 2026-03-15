/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Tambahkan domain eksternal di sini kalau pakai CDN
    // domains: ['cdn.yourdomain.com'],
    unoptimized: false,
  },
};
module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/webp"],
  },
  compiler: { styledComponents: true },
};

module.exports = nextConfig

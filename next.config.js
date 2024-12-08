/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',
};

module.exports = nextConfig; // Change from 'export default' to 'module.exports'
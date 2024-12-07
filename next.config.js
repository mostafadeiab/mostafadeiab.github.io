/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
};

module.exports = nextConfig; // Change from 'export default' to 'module.exports'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true, // Helps with GitHub Pages routing
  distDir: 'out', // This is the default, but makes it explicit
};

module.exports = nextConfig;
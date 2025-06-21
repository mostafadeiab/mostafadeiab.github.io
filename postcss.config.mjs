/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // Use 'tailwindcss', not '@tailwindcss/postcss'
    autoprefixer: {},
  },
};

export default config;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [{
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  }],
}

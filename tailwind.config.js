/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {
      spacing: {
        'screen': '100vh', // Custom padding value
        'screen-2xl': '120vh', // Example for even larger padding
      }
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'serif'], // Custom font for headings
        manrope: ['"Manrope"', 'serif'], // Custom font for the rest
      },
      colors: {
        primary: "deepskyblue",
        secondary: "goldenrod"
      }
    },
  },
  plugins: [],
};
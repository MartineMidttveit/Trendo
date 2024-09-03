/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#D6A689',
        primary: '#242122',
        secondary: '#6B6B6B',
        customGrey: '#FAF8F6'
      },
    },
  },
  plugins: [],
}
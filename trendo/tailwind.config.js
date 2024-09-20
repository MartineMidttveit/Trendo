/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#17150B',
        customOrange: '#BD9979',
        primary: '#242122',
        secondary: '#6B6B6B',
        customGrey: '#FAF8F6',
        customDarkGray: '#F3F1EE',
        'gray-neutral': '#959595',
        'beige-reddish': '#D6A689'
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
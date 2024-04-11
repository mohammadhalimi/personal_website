/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'color1': '#243c5a',
        'color2': '#608AF5',
        'color3': '#082032',
        'color4': '#172774',
        'color5': '#14279B'
      },
      fontFamily: {
        primaryRegular:['Regular'],
        primaryMedium:['Medium'],
        primarySemibold:['SemiBold'],
        primaryBold:['Bold']
      }
    },
  },
  plugins: [],
}


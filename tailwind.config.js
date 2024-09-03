/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aeonik': ['Aeonik', 'sans-serif']
      },
      fontSize: {
        '15': '15px',
        '13': '13px',
        '10': '10px',

      },
      colors: {
        'yellow': '#FFCE42',
      },
      backgroundImage: {
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

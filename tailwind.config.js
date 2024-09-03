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
        'light-gray': '#CCCCCC',
        'dark-gray': '#1A1A1A',

        'white': '#FFFFFF',
        'medium-gray': '#808080',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(91.94deg, #C250C9 6.74%, #6967B6 40.05%, #7FC6B9 71.7%)',
        'custom-gradient-2': 'linear-gradient(90deg, #83D1C3 0%, #FFFFFF 30%, #F2CE4F 53.65%, #FAA7FF 75.6%, #8AE2D2 100%)',

      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

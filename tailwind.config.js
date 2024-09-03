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
        'md-plus': '20px',
        'base-plus': '26px',
        'lg-plus': '30px',
        'lg-extra': '33px',
        'xl': '53px',
        'xxl': '56px',
        'xxl-plus': '80px',
        'giant': '153px',
      },
      colors: {
        "pink": "#F26375",
        "lemon-green": "#D3FF76",
        'dark-green': '#004D43',
        "light-green": "#39A982",
        "glowing-green": "#27EAA6",
        'dark-purple': "#312963",
        "light-purple": "#8F93FF",
        "light-blue": "#86B2F9",
        "dark-gray": "#193133",
        "light-gray": "#2a4655",
        "yolk-yellow": "#2a4655",
        "frame": '#EBFFF6',
        "bar": "#F8D079",
        "body": "#EBFFF6",
        "cost": "#F26375",
        "module": "#FFE55B",
        "card": "#49B2C1",
        "canvas": "#86B2F9",
        "button": "#27EAA6" 
      },
      backgroundImage: {
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

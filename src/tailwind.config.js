/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {

    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        primary: '#30A2FF',
        dark: '#0f172a',
        secondary: '#808080', 

      },
      screens: {
        '2xl' : '1320px',
      }
    },


  },
  plugins: [],
}


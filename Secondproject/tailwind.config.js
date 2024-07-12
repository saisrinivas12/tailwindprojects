/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html','./public/script.js'],
  theme: {
    extend: {
      colors:{
        'primary':'#3238f2',
        'secondary':'#ffffff'
      },
      fontFamily:{
         'display':['Poppins','sans-serif'],
         'body':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}


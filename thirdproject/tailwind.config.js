/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html','./public/script.js'],
  theme: {
    extend: {
      fontFamily:{
       'display':['Inter','sans-serif'],
        'body':['Poppins','sans-serif']
      },
      animation:{
        'loop-full':'custom-loop-full 50s linear infinite',
        'translateanimation':'custom-animate-translate 5s linear infinite'
      },
      keyframes:{
        'custom-loop-full':{
          'from':{
              'transform':'translateX(0)'
          },
          'to':{
               'transform':'translateX(-100%)'
          }

          
        },
        'custom-animate-translate':{
          'from':{
            'width':'50%'
          },
          'to':{
            'width':'100%'
          }
        }
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        color_blue_light: 'hsla(212, 90.9%, 47.5%, 1)',
        color_white: "hsla(0, 0%, 100%, 1)",
        color_blue: "hsla(237, 90.9%, 8.6%, 1)",
        text_white: "hsla(0, 0%, 100%, 1)",
        color_gray:'hsla(220, 81.8%, 97.8%, 1)'
      },
      backgroundImage: {
        "bg_gradient": "linear-gradient(180deg, rgba(74, 144, 245, 0.21) -34.7%, rgba(125, 186, 244, 0.063) 100%, rgba(125, 186, 244, 0.1295) 100%);",
        
      },
      backgroundColor:{
        fade:'linear-gradient(#fff,#000)'
      },
      animation: {
        moveToUp: "moveToUp 20s linear infinite"
      },
      keyframes: {
        moveToUp: {
          "0%": {
            transform: 'translateY(0%)'
          },
          "100%": {
            transform: 'translateY(-100%)'
          }
        }
      }
    },
  },
  plugins: [],
};

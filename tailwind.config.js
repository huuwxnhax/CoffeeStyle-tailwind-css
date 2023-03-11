/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '576px',
      },
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        }
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(30%)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
    animation: {
        slideDown: 'slideDown 0.4s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
    },
    backgroundImage: {
      'slider-bg': 'url("./imgs/favicon/slider.jpg")'
    }
  },
  plugins: [],
}

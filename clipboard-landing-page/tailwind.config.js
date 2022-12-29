/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        attribute: '#3e52a3',
        primary: {
          300: '#6173ff',
          800: '#26baa4',
        },
        neutral: {
          400: '#4c545d',
          800: '#9fabb2',
        },
      },
      backgroundImage: {
        'header-mobile': "url('./images/bg-header-mobile.png')",
        'header-desktop': "url('./images/bg-header-desktop.png')",
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        Bai: ['"Bai Jamjuree"', 'sans-serif'],
      },
      fontSize: {
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
};

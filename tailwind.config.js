/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: { max: '480px' },
      md: { max: '768px' },
      lg: { max: '976px' },
      xl: { max: '1230px' },
      xl2: { max: '1440px' },
      xxl: { max: '1600px' },
    },
    colors: {
      blue: '#1fb6ff',
      purple: '#bd00ff',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#fcfcfc',
      dark: '#302d2d',
      black: '#000',
    },
    placeholderColor: {
      'primary-color': '#fcfcfc',
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      width: {
        'main-logo': '180px',
        'mobile-tablet-logo': '70px',
        'retractable-input': '360px',
        btn: '120px',
      },
      padding: {
        10: '10px',
        30: '30px',
      },
    },
  },
  plugins: [],
};

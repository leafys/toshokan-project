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
      xxl2: { max: '2000px' },
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
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        logo: '180px',
      },
      width: {
        90: '360px',
        60: '60px',
        300: '300px',
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

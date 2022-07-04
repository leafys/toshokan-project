/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: { max: '580px' },
      md: { max: '768px' },
      lg: { max: '976px' },
      xl: { max: '1230px' },
      xxl: { max: '1600px' },
    },
    colors: {
      white: 'var(--white)',
      purple: 'var(--purple)',
      'brown-dark': 'var(--brown-dark)',
      gray: 'var(--gray)',
      'gray-light': 'var(--gray-light)',
      dark: 'var(--brown-dark)',
      black: 'var(--black)',
      'black-opacity-80': 'var(--black-opacity-80)',
      'gray-opacity': 'var(--gray-opacity)',
      'light-gray-opacity': 'var(--light-gray-opacity)',
    },
    placeholderColor: {
      'primary-color': '#fcfcfc',
    },
    fontFamily: {
      'primary-font': 'var(--primary-font)',
    },
    fontSize: {
      sm: ['12px', '15px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      width: {
        'main-logo': '180px',
        'mobile-tablet-logo': '70px',
        'retractable-input': '360px',
        btn: '120px',
      },
      animation: {
        appearance: 'emersion 1.2s forwards',
      },
      keyframes: {
        emersion: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      padding: {
        10: '10px',
        30: '30px',
      },
    },
  },
  plugins: [],
};

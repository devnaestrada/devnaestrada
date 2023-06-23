/** @type {import('tailwindcss').Config} */

const minWidth = {
  xs: 0,
  sm: '320px',
  md: '768px',
  lg: '1025px',
  xl: '1600px',
  '1/2': '50%',
  full: '100%',
};

const green = '#7BE473';
const gray = '#404040';
const white = '#FFFFFF';
const black = '#202020';

const palette = {
  primary: green,
  secondary: gray,
};

const colors = {
  green,
  gray,
  white,
  black,
};

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...palette,
      ...colors
    },
    fontFamily: {
      brand: ['var(--font-rubik)', 'sans-serif'],
      main: ['var(--font-main)', 'sans-serif'],
    },
    extend: {
      container: {
        screens: minWidth,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

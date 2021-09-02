const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: colors.white,
        black: colors.black,
        amber: colors.amber,
        blue: colors.blue,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: colors.coolGray,
        green: colors.green,
        indigo: colors.indigo,
        sky: colors.sky,
        lime: colors.lime,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        rose: colors.rose,
        teal: colors.teal,
        violet: colors.violet,
        yellow: colors.yellow,
      },
      spacing: {
        full: '100%',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, -20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0x, 0px) scale(1)',
          },
        },
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      backgroundImage: {
        texture: `url('/img/texture.jpg')`,
      },
      blur: {
        px: "1px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

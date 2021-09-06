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
        sick: { red: '#ff0000', black: '#393939' },
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
        'bg-gradient-tilt': {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
      },
      animation: {
        blob: 'blob 7s infinite',
        'bg-gradient-tilt': 'bg-gradient-tilt 10s infinite linear',
      },
      backgroundImage: {
        texture: `url('/img/texture.jpg')`,
      },
      blur: {
        px: '1px',
      },
      transitionTimingFunction: {
        'sick-bloop': 'cubic-bezier(1, -0.65, 0, 2.13)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

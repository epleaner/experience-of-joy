module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
};

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'gold-orange': 'rgb(255, 216, 136)',
        'soft-blue': 'rgba(199, 241, 243, 0.5)',
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

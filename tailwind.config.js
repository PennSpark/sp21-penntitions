module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '-11': '-2.75rem',
        '-13': '-3.25rem',
      },
      boxShadow: {
        dot: '0 0 20px 20px rgba(19, 25, 178, .2)',
        input: '0 0 10px 3px rgba(19, 25, 178, .1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        violet: '#6a2b86',
        'light-violet': '#BC83D4',
        aqua: '#00939d'
      },
    },
  },
  tailwindcss: {},
  autoprefixer: {},
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
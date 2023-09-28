/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rouge: {
          500: '#e5322c'
        },
        jaune: {
          500: '#fff010'
        }
      },
      fontFamily: {
        title: "'Rammetto One', cursive",
        display: "'Catamaran', sans-serif"
      }
    }
  },
  plugins: []
}

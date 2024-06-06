/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      nightwing: 'rgb(var(--color-primary) / 0.5)',
      secondary: 'rgb(var(--color-salmon) / 0.5)',
    },
    extend: {
      fontFamily: {
        cal: ['Caveat', defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      nightwing: 'rgb(var(--color-nightwing) / 0.5)',
      salmon: 'rgb(var(--color-salmon) / 0.5)',
      oak: 'rgb(var(--color-oak) / 0.5)',
      nature: 'rgb(var(--color-nature) / 0.5)',

      gold: 'rgb(var(--color-gold) / 0.5)',
      silver: 'rgb(var(--color-silver) / 0.5)',
      bronze: 'rgb(var(--color-bronze) / 0.5)',
    },
    extend: {
      fontFamily: {
        cal: ['Caveat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

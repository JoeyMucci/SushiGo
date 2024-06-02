/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      nightwing: 'rgb(var(--color-primary) / 0.5)',
      secondary: 'rgb(var(--color-salmon) / 0.5)',
    },
    extend: {},
  },
  plugins: [],
}

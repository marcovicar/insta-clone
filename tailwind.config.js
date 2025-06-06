/** @type {import('tailwindcss').Config} */
const module = require("vite");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ajusta se estiver usando outra estrutura
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#f59e0b',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

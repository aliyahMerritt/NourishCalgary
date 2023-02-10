/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        NourishBlue: '#15b7b9',
        NourishBG: '#f5f5f5',
      },
      rotate: {
        '47':'-47deg',
      }
    },
  },
  plugins: [],
}

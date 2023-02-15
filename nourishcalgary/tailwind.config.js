/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 21s infinite',
        bounce2: 'bounce 18s infinite',
        bounce3: 'bounce 15s infinite',
        bounce4: 'bounce 30s infinite'
      },
      colors: {
        NourishBlue: '#15b7b9',
        NourishBG: '#f5f5f5',
        DarkNourishBlue: '#108A8B',
      },
      backgroundColor: {
        NourishBG: '#f5f5f5',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#343541',
        text: '#F5F5F5',
        sidebar: '#202123',
        primary: '#11A37F',
      },
    },
  },
  plugins: [],
};

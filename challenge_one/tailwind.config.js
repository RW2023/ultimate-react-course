/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: true,
  },
  theme: {
    extend: {
      colors: {
        overlay: '#f4fff8ff', // Mint Cream
        background: '#000f08ff', // Night
        button: '#F8F32B', // Cadet Gray
        headline: '#f4fff8ff', // Mint Cream
        paragraph: '#8baaadff', // Cadet Gray
        buttonText: '#000f08ff', // Night
        stroke: '#4d4847ff', // Davy's Gray
        main: '#8baaadff', // Cadet Gray
        highlight: '#1c3738ff', // Gunmetal
        secondary: '#f4fff8ff', // Mint Cream
        tertiary: '#4d4847ff', // Davy's Gray
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Roboto Slab', 'sans-serif'],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gunmetal': '#293241',
      'orange': '#EE6C4D',
      'white-blue': '#E0FBFC',
      'light-blue': '#98C1D9',
      'blue': '#3D5A80',
      'charcoal': '#3C4552',
      'black': '#212529',
      'gray': '#343a40',
      'white': '#edf2f4'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      hero: ''},
  plugins: [],
  },
}
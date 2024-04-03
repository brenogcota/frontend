/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    colors: {
      white: '#fffffc',
      black: '#21211f',
      gray: {
        100: '#f9f9f9',
        300: '#F0F0F0',
        500: '#bfbdb6',
        600: '#595856'
      },
      green: '#54d4a0'
    }
  },
  plugins: [],
}


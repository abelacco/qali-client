/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'qali-blue': '#132B5B',
        'qali-green': '#0FFFA9',
        'qali-light-grey': '#D4D6E4',
        'qali-grey': '#969696'
      }
    },
  },
  plugins: [],
}



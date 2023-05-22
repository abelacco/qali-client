/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1BlueNavbar: "#172554",
        color2GreenQali: "#34d399",
        color3GrayFooter: "#d1d5db",
      },
    },
  },
  plugins: [],
};

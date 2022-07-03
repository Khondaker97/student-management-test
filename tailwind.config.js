/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        passion: ["Passion One", "cursive"],
      },
      colors: {
        white: "#FFFFFF",
        blue: "#2CA4D8",
        yellow: "#FFBF3F",
        dashBg: "#F9FCFE",
        gray: "#7F878A",
      },
    },
  },
  plugins: [],
};

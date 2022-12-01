/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "dark-blue": "hsl(209, 23%, 22%)",
      "very-dark-blue": "hsl(207, 26%, 17%)",
      "very-dark-blue-2": "hsl(200, 15%, 8%)",
      "dark-gray": "hsl(0, 0%, 52%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      space: ["Nunito", "Sans"],
    },
    extend: {},
  },
  plugins: [],
};

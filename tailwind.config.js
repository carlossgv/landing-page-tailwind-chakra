/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      accent: "red",
      accentDark: "blue",
      primaryBg: "white",
      primaryBgDark: "blue",
      text: "black",
      textDark: "white",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};

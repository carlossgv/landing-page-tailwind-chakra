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
      linkHover: "gray",
      linkHoverDark: "gray",
      primaryBg: "white",
      primaryBgDark: "black",
      text: "black",
      textDark: "white",
      transparent: "transparent",
    },
    extend: {
      keyframes: {
        toggleIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        toggleIn: "toggleIn 500ms 1",
      },
    },
  },
  plugins: [],
};

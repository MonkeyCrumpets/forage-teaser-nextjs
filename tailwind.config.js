const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cream: "#fbf7f0",
      dark: "#1C2120",
      neutral: "#555555",
      paper: "#CDC9C3",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      sans: ["Montserrat"],
      logo: ["Josefin Sans"],
    },
  },
  plugins: [],
};

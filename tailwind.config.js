/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#673ab7 ",
        secondary: "#f37650",
        accent: "#ffffff",
        backgrounColor: "#ede7f6",
        textColor: "#8a8a8a ",
      },
    },
    fontFamily: {
      dmSans: ["DM Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};

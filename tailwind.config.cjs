/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accentColor: "#F4511E",
        secondary: "#252B42",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        assistant: ["Assistant", "sans-serif"],
      },
    },
  },
  plugins: [],
};

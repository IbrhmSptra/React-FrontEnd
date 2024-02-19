/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui"],
      },
      colors: {
        primary: "#FEDA15",
        tertiary: "#DE0001",
        headline: "#27231F",
        grayText: "#6F6F6F",
      },
    },
  },
  plugins: [],
};

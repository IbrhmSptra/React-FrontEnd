/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'bg-banner': "url('src/assets/img/Background.webp')",
      },
      animation: {
        bouncing: "bounce 2s ease-in infinite",
      },
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

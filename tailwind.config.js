/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#292E36",
        custom1: "#343942",
        custom2: "#555555",
        white2: "#FFF8F5",
        gold: "#E1B168",
      },
      fontFamily: {
        cormorant: ["Cormorant Infant", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      lineHeight: {
        "extra-tight": "0.7",
        tighter: "0.8",
      },
      backgroundImage: {
        formbg: "url(./src/assets/formBg.jpg)",
      },
    },
  },
  plugins: ["daisyui"],
};

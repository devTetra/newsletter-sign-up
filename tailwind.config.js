/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        peach: "hsl(13, 100%, 62%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": " hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        auto: "repeat(2,auto)",
      },
      gridTemplateRows: {
        auto: "repeat(2,auto)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mapbg: "url(https://8kexpeditions.com/assets/images/about-bg.jpg)",
      },
      screens:{
        mobile: { max: "766px" },
      },
      colors: {
        primary: "#006F9C",
        navy: {
          800: "#0B2F64",
          900: "#082450",
        },
      },
    },
  },
  plugins: [],
};

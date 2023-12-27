/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0585F4",
        secondary: "#F5F3AA",
        tertiary: "#DC3C0C",
        background: "#ebf5ff",
        "primary-complement": "#4E7FB4",
        "tertiary-complement": "#F68E47",
        "text-color": "#222222",
        "text-color-light": "#f3f4f6",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "hero-gradient": "#74c0fc",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #dc3c0c",
      },
      screens: {
        xs: "375px",
        md2: "850px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
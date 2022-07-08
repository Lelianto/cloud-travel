/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screen: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1448px",
      "3xl": "1600px",
    },
    extend: {
      colors: {
        "blue-1": "#002D63",
        "blue-2": "#00A1E5",
        placeholder: "#757575",
        line: "#DDDDDD",
        "light-grey": "#F5F5F5",
        "black-three": "#333333",
      },
    },
  },
  plugins: [],
};

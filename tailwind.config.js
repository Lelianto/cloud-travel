/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
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

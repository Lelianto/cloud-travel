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
      },
    },
  },
  plugins: [],
};

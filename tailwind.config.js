/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF8EF",
        primary: "#FF6525",
        secondary: "#3DB3AD",
        success: "#00B448",
        warning: "#ED9B22",
        danger: "#FF4747",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(25, 25, 25)",
        foreground: "rgb(40, 40, 40)",
        primary: "rgb(255, 184, 47)",
        secondary: "#46ACF3",
        offwhite: "#F4F8FA",
        default: "#0E0F0F",
        gray: "#B9BCBD",
        whitesmoke: "#ECF0F2",
      },
    },
  },
  plugins: [],
};

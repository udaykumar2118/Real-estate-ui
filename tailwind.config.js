/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B1E16",
        secondary: "#C2A38B",
        light: "#F8F5F2",
        dark: "#1A1A1A",
      },
    },
  },
  plugins: [],
};

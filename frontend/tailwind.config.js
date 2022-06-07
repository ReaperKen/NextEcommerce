module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-100": "#181818",
        "dark-200": "#212121",
        "dark-300": "#3d3d3d",
        "dark-400": "#aaaaaa",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        darkMode: "#1E1F28",
        white: "#FAFAFA",
        black: "#23262A",
        green: "#8BAA36",
        greenBorder: "#3CBC81",
        bgGray: "#2A2C36",
        btnGray: "#D9D9D9",
        darkGrey: "#3E4462",
        lightGray: "#BDBDBD",
        lightGrayDarkMode: "#A2A2A6",
        categTitle: "#001833",
        recipeDesc: "#7D7D7D",
        bottomBorder: "#E0E0E0",
        inputBorder: "#686A71",
        inputText: "#D0D1D3",
        addRecipeBg: "#F5F5F5",
        popularText: "#7E7E7E",
        error: "#E74A3B",
        warning: "#F6C23E",
        footerBg: "#22252A",
        footerInputBorder: "#44464A",
        footerInputDarkMode: "#9CB655",
        bgLogoFooter: "#EBF3D4",
      },
    },
  },
  plugins: [require("autoprefixer")],
};

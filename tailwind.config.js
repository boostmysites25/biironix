/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary': '#5B6CFF',
        headerbackgroundcolor: "#ffffff",
        headertextcolor: "#1a1a1a",
        headertexthoverandactive: "#FF1F1F",
        backgroundcolor: "#f8f9fa",
        primarytextcolor: "#333333",
        footerbackgrouncolor: "#f1f1f1",
        primary: "#FF1F1F",
        secondary: "#000000",
        tertiary: "#272727",
        bordercolor: "rgba(255, 31, 31, 0.5)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        section4: "url('/src/assets/images/section4-img.png')",
        "custom-gradient":
          "linear-gradient(90deg, rgba(255,31,31,0.1) 0%, rgba(240,240,240,0.8) 100%)",
        "backgro-gradient":
          "linear-gradient(90deg, rgba(255,31,31,0.6) 0%, rgba(200,200,200,0.6) 100%);",
        "backgro-gradient-revert":
          "linear-gradient(90deg, rgba(200,200,200,0.6) 0% ,rgba(255,31,31,0.6) 100%);",
      },
    },
  },
  plugins: [],
};

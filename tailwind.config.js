module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_99: "#ffffff99", A700_01: "#ffffff" },
        blue_gray: { 100: "#cecccc" },
        black: { 600: "#656d76", 900: "#000000", "900_26": "#00000026", A700_01: "#000000" },
        gray: { 900: "#282828" },
      },
      boxShadow: { xs: "0px 0px 13px 5px #00000029" },
      fontFamily: { oxygen: "Oxygen", exo: "Exo", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

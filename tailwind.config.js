module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gugi: ["Gugi", "cursive"],
        "noto-sans-kr": ["Noto Sans KR", "sans-serif"],
      },

      colors: {
        SKKU_GREEN : "#2b6653",
        basecolor : "bg-yellow-50"
      },
      
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [],
};

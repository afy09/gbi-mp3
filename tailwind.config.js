/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["ql-container", "ql-editor", "ql-toolbar"],
  theme: {
    extend: {
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0.7)", opacity: "0.7" },
          "70%": { transform: "scale(1.5)", opacity: "0" },
          "100%": { transform: "scale(0.7)", opacity: "0" },
        },
      },
      animation: {
        pulseRing: "pulseRing 1s cubic-bezier(0.66, 0, 0, 1) infinite",
      },
      fontFamily: {
        edu: ['"Edu NSW ACT Cursive"', "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        primary: "#FFB4B4",
        primary2: "#cfa84d",
        secondary: "#87CEFA",
        black2: "#322C2B",
      },
    },
  },
  plugins: [],
};

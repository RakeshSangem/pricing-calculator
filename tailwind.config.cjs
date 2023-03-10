module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "range-shadow": "0px 8px 6px 0px hsl(174, 77%, 80%)",
      },
      backgroundImage: {
        circles: "url('./assets/pattern-circles.svg')",
        sliderIcon: "url('./assets/icon-slider.svg')",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        "soft-cyan": "hsl(174, 77%, 80%)",
        "strong-cyan": "hsl(174, 86%, 45%)",
        "light-grayish-red": "hsl(14, 92%, 95%)",
        "light-red": "hsl(15, 100%, 70%)",
        "pale-blue": "hsl(226, 100%, 87%)",
        "price-white": "hsl(0, 0%, 100%)",
        "very-pale-blue": "hsl(230, 100%, 99%)",
        "light-grayish-slider": "hsl(224, 65%, 95%)",
        "light-grayish-blue": "hsl(223, 50%, 87%)",
        "grayish-blue": "hsl(225, 20%, 60%)",
        "dark-desaturated-blue": "hsl(227, 35%, 25%)",
      },
    },
  },
  plugins: [],
};

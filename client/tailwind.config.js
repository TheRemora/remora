/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "412px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        background: "#161616",
        textWhite: "#efefef",
      },
      fontFamily: {
        "DM-Sans": ["DM Sans", "sans-serif"],
      },
      keyframes: {
        blurAnimation: {
          "0%": {
            background: "linear-gradient(to top, #14E2B2, #2DF05D, #46FF05)",
          },
          "100%": {
            background: "linear-gradient(to left, #14E2B2, #2DF05D, #46FF05)",
          },
        },
        borderAnimation: {
          "0%": {
            border: "2px solid #14E2B2",
          },
          50: {
            border: "2px solid #2DF05D",
          },
          "100%": {
            border: "2px solid #46FF05",
          },
        },
      },
      animation: {
        blurAnimation: "blurAnimation 2s ease-in-out infinite alternate",
        borderAnimation: "borderAnimation 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

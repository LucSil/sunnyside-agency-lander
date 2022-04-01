module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "P-softRed": "hsl(7, 99%, 70%)",
        "P-Yellow": "hsl(51, 100%, 49%)",
        "P-darkDesatCyan": "hsl(167, 40%, 24%)",
        "P-darkBlue": "hsl(198, 62%, 26%)",
        "P-darkModCyan": "hsl(168, 34%, 41%)",

        // Neutral Colors
        veryDarkDesatBlue: "hsl(212, 27%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        "N-White": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};

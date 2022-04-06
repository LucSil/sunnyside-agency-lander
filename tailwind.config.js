module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/added/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ex: "750px",

        // Mobile Layouts
        m1: "320px", // iPhone 5/SE
        m2: "360px", // Galaxy S20
        m3: "375px", // iPhone 12/13 mini
        m4: "414px", // iPhone 11 Pro Max

        // Desktop Layouts
        d1: "1024px",
        d3: "1366px",
      },
      colors: {
        // Primary Colors
        "P-softRed": "hsl(7, 99%, 70%)",
        "P-Yellow": "hsl(51, 100%, 49%)",
        "P-darkDesatCyan": "hsl(167, 40%, 24%)",
        "P-darkBlue": "hsl(198, 62%, 26%)",
        "P-darkModCyan": "hsl(168, 34%, 41%)",

        // Neutral Colors
        veryDarkDesatBlue: "hsl(212, 26%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGrayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        "N-White": "hsl(0, 0%, 100%)",
        custom: "hsl(168, 50%, 70%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};

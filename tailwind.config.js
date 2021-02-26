// See https://tailwindcss.com/docs/configuration for details
const colors = require("tailwindcss/colors");

module.exports = {
    purge: false, //["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            blue: colors.indigo,
            violet: colors.violet,
            purple: colors.violet,
            rose: colors.rose,
            red: colors.rose,
            yellow: colors.amber,
            amber: colors.amber,
            green: colors.emerald,
            emerald: colors.emerald,
            pink: colors.pink,
            // primary: colors.emerald[500],
            // secondary: "#464D77", //colors.amber[300],
            // highlight: "#36827F", //"#E83151",
            // tprimary: "#464D77", // colors.gray[600], //colors.indigo[800],
            // "tprimary-lighter": colors.gray[100],
            tlight: colors.gray[50]
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        red: {
          light: "#A44240",
          DEFAULT: "#6f1d1b",
          dark: "#4A0A08",
        },
      },
      boxShadow: {
        main: "0 -4px 10px rgba(0,0,0,.25)",
      },

      dropShadow: {
        logo: "0 2px 1px rgba(0,0,0,0.25)",
        intro: "0 0px 0px 10px #6f1d1b",
      },
      gridTemplateRows: {
        menu: "1fr minmax(4rem, 6rem)",
      },
      backgroundImage: {
        intro: "url('/src/assets/intro-bg.jpg')",
        radial:
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 50%, rgba(227,227,227,1) 100%)",
        instagram: "linear-gradient( 90deg, #D300C5, #FF0069, #FF7A00 )",
        recife:
          "linear-gradient(180deg,  rgba(0,131,191,1) 0%, rgba(0,189,255,1)  50%, rgba(0,131,191,1) 100%)",
      },
    },
  },
  plugins: [],
};

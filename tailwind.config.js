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
        blog: "0px 0px 4px 2px rgba(0,0,0,.1)",
        blogItem: "0px 4px 4px rgba(0,0,0,.25)",
      },

      dropShadow: {
        logo: "0 2px 1px rgba(0,0,0,0.25)",
        intro: "0 0px 0px 10px #6f1d1b",
        // blogImage: "-4px 4px 0px rgba(0,0,0,.25)",
      },
      gridTemplateRows: {
        menu: "1fr minmax(4rem, 6rem)",
        items: "minmax(120px, 10vw) minmax(200px, 1fr)",
      },
      gridTemplateColumns: {
        blog: "2fr 1fr",
      },
      backgroundImage: {
        intro: "url('/src/assets/intro-bg.jpg')",
        blog: "linear-gradient(180deg,  rgba(0,0,0) 82%,  rgba(255,255,255,0) 82%)",
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

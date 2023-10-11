module.exports = {
  content: [
    "./src/**/*.{vue,html,js}",
    "./src/components/**/*.{vue,html,js}",
    "./src/views/**/*.{vue,html,js}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      ra: {
        dark: "#3E0709",
        red: "#6E090C",
        gold: "#D98438",
      },
    },
    fontSize: {
      sm: ["1.25em", "100%"],
      base: ["13.75em", "80%"] /* 220px */,
    },
    fontFamily: {
      bebas: "Bebas Neue",
      robo: "Roboto",
      incon: "Inconsolata",
      vibes: "Great Vibes",
    },
    container: {
      padding: "2rem",
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      ldesktop: "1920px",
    },
    borderRadius: {
      sm: "12px",
      md: "24px",
      lg: "36px",
      xl: "48px",
    },
  },
  plugins: [],
};

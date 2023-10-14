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
      xs: ["1.125em", "100%"],
      sm: ["1.25em", "100%"],
      sx: ["1.875em", "100%"],
      mx: ["3em", "100%"],
      md: ["3.75em", "100%"],
      lg: ["4.5em", "100%"],
      lx: ["11.25em", "100%"],
      base: ["13.75em", "80%"] /* 220px */,
      xl: ["25em", "100%"],
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
      mobile: "320px",
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

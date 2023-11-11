module.exports = {
  content: [
    './src/**/*.{vue,html,js}',
    './src/components/**/*.{vue,html,js}',
    './src/views/**/*.{vue,html,js}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      ra: {
        black: '#0D0D0D',
        dark: '#3E0709',
        trans: 'rgba(37, 4, 6, 0.7)',
        darker: '#250406',
        red: '#6E090C',
        /*gold: '#D98438',*/
        gold: '#F28907',
      },
    },
    fontSize: {
      xs: ['1.125em', '100%'],
      sm: ['1.25em', '100%'],
      sx: ['1.875em'],
      mx: ['3em', '100%'],
      md: ['3.75em', '100%'],
      lg: ['4.5em', '100%'],
      lx: ['11.25em', '100%'],
      base: ['13.75em', '80%'] /* 220px */,
      xl: ['25em', '100%'],
    },
    fontFamily: {
      bebas: 'Bebas Neue',
      robo: 'Roboto',
      incon: 'Inconsolata',
      vibes: 'Great Vibes',
    },
    container: {
      padding: '2rem',
    },
    borderRadius: {
      sm: '12px',
      md: '24px',
      lg: '36px',
      xl: '48px',
    },
  },
  plugins: [],
}

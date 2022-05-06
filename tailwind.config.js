module.exports = {
  content: [
    './src/pages/**/*.{html,js}',
    './src/templates/**/*.{html,js}',
    './src/components/**/*.{html,js}',
  ],
  theme: {
    screens: {},
    colors: {
      white: '#fff',
      black: '#000',
      blue: '#1a1f4c',
      turquoise: '#26c6b4',
      grey: {
        100: '#f7fafc',
        900: '#1a202c',
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {}
  },
  plugins: []
}

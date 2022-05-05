module.exports = {
  content: [
    './src/pages/**/*.{html,js}',
    './src/templates/**/*.{html,js}',
    './src/components/**/*.{html,js}',
  ],
  theme: {
    screens: {},
    colors: {
      blue: '#1fb6ff',
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

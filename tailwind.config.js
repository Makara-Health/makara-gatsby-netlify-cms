module.exports = {
  content: [
    './src/pages/**/*.{html,js,jsx}',
    './src/templates/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      screens: {},
      colors: {
        white: '#fff',
        black: '#000',
        blue: '#1a1f4c',
        lightblue: '#2bb4dc',
        turquoise: '#26c6b4',
        grey: {
          100: '#f7fafc',
          300: '#f3f3f3',
          500: '#a7a7a8',
          900: '#1a202c',
        }
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        default: '#101019',
        primary: '#67CEFC',
        secondary: '#8967FC',
        alternative: '#989BDF',
      },
    },
  },
  plugins: [],
}

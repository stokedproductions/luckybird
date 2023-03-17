const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        hideButton: '1279px',
      },
      fontFamily: {
        sans: [...fontFamily.sans],
        poppins: ['var(--font-poppins)'],
        bebas: [`var(--font-bebasNueue)`],
      },
    },
  },
  plugins: [],
}

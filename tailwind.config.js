/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'desk': "url('../images/bg-intro-desktop.svg')",
        'mobil': "url('../images/bg-intro-mobile.svg')"
      }
    },
  },
  plugins: [],
}


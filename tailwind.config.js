/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require('tailwindcss/colors')
let plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,


      primary: colors.blue,
      secondary: colors.black,
      neutral: colors.gray,
    },
    extend: {
      fontFamily: {
        "primary": ["Sora", ...defaultTheme.fontFamily.sans],
      },

      animation: {
        'slide-down': 'slideDown 0.1s ease-out'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translate(0px,-2px)', },
          '100%': { transform: 'translate(0px,0px)', },
        }
      },
    },
    plugins: [
      plugin(function ({ addVariant }) {
        // Add a `third` variant, ie. `third:pb-0`
        addVariant('rad-selected', '[&[data-highlighted]]')
      })
    ],
  }
}

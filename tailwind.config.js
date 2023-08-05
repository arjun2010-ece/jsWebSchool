const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "414px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1601px",
      // xm: "350px",
      // // => @media (min-width: 380px) { ... }

      // xs: "480px",
      // // => @media (min-width: 480px) { ... }

      // sm: "640px",
      // // => @media (min-width: 640px) { ... }

      // md: "768px",
      // // => @media (min-width: 768px) { ... }

      // lg: "1024px",
      // // => @media (min-width: 1024px) { ... }

      // xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bermuda: "#78dcca",
    },
    fontSize: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '2.5rem',
      '7xl': '3rem',
      '8xl': '8rem',
      '9xl': '10rem',
      '10xl': '12rem',
      'mobile-xs': '0.75rem',
      'mobile-sm': '0.875rem',
      'mobile-lg': '1.125rem',
      'mobile-xl': '1.25rem',
      'mobile-2xl': '1.5rem',
      'mobile-3xl': '1.75rem',
      'mobile-4xl': '2rem',
      'mobile-5xl': '2.625rem',
      'mobile-6xl': '3.25rem',
      'mobile-7xl': '4rem',
      section: '2.5rem',
    },
  },
  plugins: [],
};

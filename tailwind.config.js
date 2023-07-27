/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",


  ],
  theme: {
    extend: {
        keyframes: {
        op1: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
          op2: {
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        
      },
      animation: {
        'opp': 'op1 3s linear infinite',
        'opp2': 'op2 2s linear infinite',
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',

        '129': '45rem',
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        'sm': { 'max': '767px' },

        'md': { 'min': '768px', 'max': '820px' },

        'lg': { 'max': '1280px' },

        'xl': { 'max': '1535px' },

        '2xl': { 'max': '1536px' },
      },
      colors: {
        bron: "#FBAA4E",

      },
      borderWidth: {
        DEFAULT: '1px',
        '3': '3px',

      },
      fontSize: {
        base: "1rem",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        brontext: '3.5rem',
        xl: "4.5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};

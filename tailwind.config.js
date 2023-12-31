/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171219",
        secondary: "#5C946E",
        tertiary: "#FFD4B8",
        skill:"linear-gradient(209deg, rgba(0, 237, 100, 0.06) 35.63%, rgba(255, 255, 255, 0.03) 133.15%)",
        darktext:"#BDC6D3",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
       kreon: ["Kreon, serif"],
       kenia: ["Kenia, cursive"],
     
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Disable default colors to enforce our black-and-white minimal design
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // Custom black, white, and gray tones
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        50: "#F9F9F9",
        100: "#F3F3F3",
        200: "#E6E6E6",
        300: "#D9D9D9",
        400: "#B3B3B3",
        500: "#8C8C8C",
        600: "#666666",
        700: "#4D4D4D",
        800: "#333333",
        900: "#1A1A1A",
        950: "#0D0D0D",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      spacing: {
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

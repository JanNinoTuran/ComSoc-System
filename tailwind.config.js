/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1fb",
          100: "#d5dcf5",
          200: "#aab7ea",
          300: "#7f92df",
          400: "#546dd4",
          500: "#3b56c9",
          600: "#2c3f9e",
          700: "#233174",
          800: "#1a2559",
          900: "#111a40",
          950: "#0b1230",
        },
        brand: {
          blue: "#2f52e0",
          dark: "#111a40",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-out both",
        kenburns: "kenburns 8s ease-out both",
      },
    },
  },
  plugins: [],
};

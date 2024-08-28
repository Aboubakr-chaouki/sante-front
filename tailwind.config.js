/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px -8px 37px 0px rgba(218, 218, 218, 1)", // Correction de la parenthèse fermante
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/input.css"],
  theme: {
    extend: {
      colors: {
        0: "#f1f1f1",
        1: "#fb8d00",
        2: "#855bf9",
        3: "#e9e6fb",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      setup: "30px",
    },
  },
  plugins: [],
};

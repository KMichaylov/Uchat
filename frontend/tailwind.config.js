/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-background-color": "#BAE8E8",
      "primary-button-color": "#487BFF",
      "danger-color": "#D90429",
      "warning-color": "#FFD803",
    },
    backgroundImage: {
      "background-pattern": "url('/frontend/src/assets/background.png')",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

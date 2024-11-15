/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-pattern": "url('./src/assets/background.png')",
      },
      colors: {
        "primary-background-color": "#BAE8E8",
        "primary-color": "#487BFF",
        "danger-color": "#D90429",
        "warning-color": "#FFD803",
        "retract-color": "#D8D8D8",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  // forces to include the color
  safelist: ["bg-warning-color"],
};

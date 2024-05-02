import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      paused: "paused",
      running: "running",
    },
    colors: {
      ...colors,
      primary: "#223863",
      secondary: "#3f68b8",
      black: "#05080e",
      transparent: "transparent",
      white: "#fff",
      orange: "#ea580c",
    },
  },
  plugins: [],
};
export default config;

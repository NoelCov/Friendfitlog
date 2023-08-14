import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background-darkMode": "#1D232A",
      "text-darkMode": "#A6ADBA",
      "primaryColor-darkMode": "#319B8B",
      "contrastColor-darkMode": "#191E24",
      "background-dark-darkMode": "#111519",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
export default config;

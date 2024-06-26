import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      metrophobic: ["Metrophobic", "sans-serif"],
    },

    extend: {
      colors: {
        background: "#000",
        primary: "#ffffff",
        "primary-muted": "#f9f9f9",
        splash: "#e30b5d",
        muted: "#a1a1a9",
        "muted-dark": "#273444",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c97a",
          dim: "rgba(201,168,76,0.35)",
        },
        cream: "#e8e0d0",
        deep: "#0a0906",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        jost: ["Jost", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseDot: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(201,168,76,0.6)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 0 6px rgba(201,168,76,0)",
          },
        },
      },
      animation: {
        shimmer: "shimmer 4s linear infinite",
        float: "float 8s ease-in-out infinite",
        pulseDot: "pulseDot 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;

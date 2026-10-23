import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: "#6B1220", deep: "#4A0C16" },
        gold: { DEFAULT: "#B8860B", soft: "#C9A227" },
        ivory: "#FFFDF8",
        charcoal: "#1C1917",
        mist: "#F4EFE6",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        devanagari: ["var(--font-deva)", "serif"],
      },
      maxWidth: {
        site: "1120px",
      },
      boxShadow: {
        quiet: "0 18px 40px rgba(28, 25, 23, 0.08)",
      },
      keyframes: {
        ken: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        draw: {
          "0%": { strokeDashoffset: "120" },
          "100%": { strokeDashoffset: "0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        ken: "ken 18s ease-in-out alternate infinite",
        marquee: "marquee 48s linear infinite",
        draw: "draw 1s ease forwards",
        rise: "rise 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A1428",
          900: "#0F1E3A",
          800: "#162440",
          700: "#1E3A5F",
        },
        blue: {
          primary: "#1657FF",
          light: "#4F80FF",
          pale: "#EEF2FF",
          subtle: "#F0F4FF",
        },
        cyan: {
          accent: "#00C8FF",
          light: "#E0F7FF",
        },
        // keep mint as alias so existing classes still work
        mint: {
          400: "#1657FF",
          500: "#0B4EF0",
          600: "#0A3FD0",
        },
        glow: "#00C8FF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif"],
      },
      animation: {
        "float-slow": "float 12s ease-in-out infinite",
        "float-fast": "float 7s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(20px,-30px,0) scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

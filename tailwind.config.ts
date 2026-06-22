import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        mdg: {
          ink: "rgb(var(--color-ink) / <alpha-value>)",
          muted: "rgb(var(--color-muted) / <alpha-value>)",
          surface: "rgb(var(--color-surface) / <alpha-value>)",
          panel: "rgb(var(--color-panel) / <alpha-value>)",
          border: "rgb(var(--color-border) / <alpha-value>)",
          blue: "#35579A",
          navy: "#08244A",
          sky: "#0EA5E9",
          orange: "#F97316",
        },
      },
      boxShadow: {
        glass: "0 24px 80px rgb(3 20 45 / 0.24)",
        quiet: "0 12px 40px rgb(3 20 45 / 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;

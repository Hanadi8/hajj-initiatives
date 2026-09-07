import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "2.5rem" },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1440px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          light: "var(--color-primary-light)",
          soft: "var(--color-primary-soft)",
        },
        accent: { DEFAULT: "var(--color-accent)", light: "var(--color-accent-light)" },
        surface: "var(--color-surface)",
        background: "var(--color-background)",
        offwhite: "var(--color-offwhite)",
        text: { DEFAULT: "var(--color-text)", muted: "var(--color-muted)" },
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: ["var(--font-diodrum)", "Tajawal", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
      animation: {
        fadeUp: "fadeUp .6s ease forwards",
        fadeIn: "fadeIn .4s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;

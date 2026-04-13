import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        line: "var(--line)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        accentStrong: "var(--accent-strong)",
        metallic: "var(--metallic)",
      },
      boxShadow: {
        panel: "0 18px 50px rgba(20, 33, 45, 0.08)",
        lift: "0 18px 42px rgba(20, 33, 45, 0.12)",
      },
      backgroundImage: {
        signal:
          "linear-gradient(rgba(8, 92, 128, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(8, 92, 128, 0.05) 1px, transparent 1px)",
      },
      animation: {
        shimmer: "shimmer 7s linear infinite",
        float: "float 9s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 0%, 0 0" },
          "100%": { backgroundPosition: "0% 0%, 120px 120px" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

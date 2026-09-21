import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#101B26",
        foreground: "#EFEBDF",
        primary: "#C08A3E",
        "primary-foreground": "#101B26",
        secondary: "#2F5D50",
        "secondary-foreground": "#EFEBDF",
        destructive: "#9A3E2C",
        "destructive-foreground": "#EFEBDF",
        accent: "#D9AE6B",
        "accent-foreground": "#101B26",
        input: "#3A4756",
        ring: "#D9AE6B",
        ink: "#101B26",
        "ink-soft": "#1B2938",
        paper: "#E7E2D2",
        "paper-soft": "#EFEBDF",
        brass: "#C08A3E",
        "brass-soft": "#D9AE6B",
        green: "#2F5D50",
        stamp: "#9A3E2C",
        "rule-dark": "#3A4756",
        "rule-light": "#C9C2AC",
        "on-dark": "#EFEBDF",
        "on-dark-dim": "#AEB9C4",
        "on-paper": "#181410",
        "on-paper-dim": "#5B5546",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        plex: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        "plex-mono": ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

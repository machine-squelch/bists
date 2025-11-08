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
        primary: {
          DEFAULT: "#0A4F9D",
          dark: "#073B7A",
        },
        secondary: {
          DEFAULT: "#FFC107",
        },
        background: "#FFFFFF",
        foreground: "#1A202C",
        muted: "#F7FAFC",
      },
    },
  },
  plugins: [],
};
export default config;

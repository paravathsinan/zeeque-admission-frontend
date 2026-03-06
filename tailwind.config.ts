import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        luxury: {
          primary: "#DD5195",
          primaryDark: "#BC3477",
          charcoal: "#1A1A1A",
          cream: "#FDFBF7",
          navy: "#0A192F",
          accent: "#F28BB5",
        }
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #DD5195 0%, #BC3477 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)',
      }
    },
  },
  plugins: [],
};
export default config;

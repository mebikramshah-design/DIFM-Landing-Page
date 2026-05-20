import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B2545",
          deep: "#13315C",
          steel: "#1E5F8C",
          teal: "#1FA9A1",
          gold: "#D4A24C",
          ivory: "#F4F1EB"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(11, 37, 69, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;

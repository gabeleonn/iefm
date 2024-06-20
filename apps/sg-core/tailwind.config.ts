import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        background2: "var(--background2)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss"
import flowbite from "flowbite-react/tailwind"

export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
    flowbite.content({
      base: "../../",
    }),
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          labels: "#282828",
          focus: "#6366f1",
          button: {
            bg: "#4338ca",
            hover: "#312e81",
            border: "#6366f1",
          },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config

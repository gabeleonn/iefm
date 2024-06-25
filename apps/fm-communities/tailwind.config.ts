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
    extend: {},
  },
  plugins: [flowbite.plugin()],
} satisfies Config

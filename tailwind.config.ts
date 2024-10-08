import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import forms from "@tailwindcss/forms"

export default <Partial<Config>>{
  plugins: [forms],
  content: ["content/**/*.md", "docs/content/**/*.md"],
  safelist: [
    { pattern: /grid-cols-\d/, variants: ["md"] },
    { pattern: /h-\d/ },
    { pattern: /text-gray-\d+/ },
    { pattern: /bg-gray-\d+/ },
    "scale-0",
    "scale-100",
    "blur-md",
    "opacity-0",
    "opacity-100",
    "hidden",
    "left-0",
    "right-0",
    "left-1/2",
    "-translate-x-1/2",
    "-translate-x-3/4",
    "rotate-180",
    "text-xs",
    "text-wrap",
    "text-nowrap",
    "bg-[#69BE28]",
    "size-6",
    "size-8",
  ],
  theme: {
    extend: {
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      colors: {
        frite: {
          50: "#fdfce9",
          100: "#fcf7c5",
          200: "#fbec8d",
          300: "#f8da4c",
          400: "#f4c61f",
          500: "#e4ad0e",
          600: "#c58509",
          700: "#9d5f0b",
          800: "#824b11",
          900: "#6e3e15",
          950: "#401f08",
        },
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}

import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  plugins: [require("@tailwindcss/forms")],
  content: ["content/**/*.md", "docs/content/**/*.md"],
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
};

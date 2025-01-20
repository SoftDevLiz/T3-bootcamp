import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        bodyGradient: "linear-gradient(180deg,rgb(15, 2, 46) 0%,rgb(22, 2, 82) 100%, rgb(32, 3, 100) 0%, rgb(43, 3, 135) 0%, rgb(57, 7, 173) 0%)",
      },
    },
  },
  plugins: [],
} satisfies Config;

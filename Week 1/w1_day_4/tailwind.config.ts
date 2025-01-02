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
        mainGradient: 'linear-gradient(60deg, #29323c 0%, #485563 100%)'
      },
    },
  },
  plugins: [],
} satisfies Config;

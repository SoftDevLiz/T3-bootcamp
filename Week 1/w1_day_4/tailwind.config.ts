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
        mainGradient: 'linear-gradient(60deg,rgb(48, 41, 60) 0%, #485563 100%)',
        buttonGradient: 'linear-gradient(60deg, purple 10%, red)',
        textGradient: 'linear-gradient(60deg, purple 10%, red)'
      },
    },
  },
  plugins: [],
} satisfies Config;

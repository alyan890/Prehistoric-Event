import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dino-orange": "#D97634",
        "dino-dark": "#3D3D2E",
        "dino-tan": "#D4C5A9",
        "dino-olive": "#5F6D4A",
        "dino-gold": "#D4AF37",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        heading: ["Georgia", "serif"],
      },
      backgroundImage: {
        "dino-jungle": "url('/WhatsApp%20Image%202026-03-10%20at%208.07.27%20PM.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config;

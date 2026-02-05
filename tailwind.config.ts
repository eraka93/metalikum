// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tamno siva iz logoa (čelik/metal)
        dark: "#4A4A4A", 
        // Crvena iz logoa (laser/akcenat)
        brandRed: "#E31E24", 
        // Svetlo siva za pozadine sekcija
        lightGray: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'scroll-to-left': 'scrollLeft 20s linear infinite',
        'scroll-to-right': 'scrollRight 20s linear infinite',
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(calc(-100% - 100px))'},
        },
        scrollRight: {
          '0%': { transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(-100%)'},
        }
      }
    },
  },
  plugins: [],
} satisfies Config;

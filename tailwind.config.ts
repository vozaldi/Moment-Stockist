import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Spartan', 'sans-serif'],
        serif: ['"Nanum Myeongjo"', 'Spartan', 'serif'],
      },
      colors: {
        primary: '#eab2b2',
        secondary: '#e39b35',
        'fucosan-pink': '#f9bdbd',
        'fucosan-pink-dark': '#f67676',
      },
    },
  },
  plugins: [],
} satisfies Config;

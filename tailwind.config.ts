import type { Config } from "tailwindcss";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'md': '375px',
      'lg': '1440px',
    },
    extend: {
      colors: {
        primary: {
          'white': 'hsl(0, 0%, 100%)',
          'black': 'hsl(0, 0%, 0%)',
          'dark-gray': 'hsl(0, 0%, 63%)',
          'very-dark-gray': 'hsl(0, 0%, 27%)',
        },
      },
      fontFamily: {
        spartan: ['var(--font-spartan)'],
      },
      fontSize: {
        body: '12px',
      },
      fontWeight: {
        medium: '500',   
        semibold: '600',   
        bold: '700',   
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#020710',
        grey: '#191919',
        primary: '#b6fb44',
      },
      backgroundImage: {
        'circle-glow': "url('/backgrounds/bg-circle.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;

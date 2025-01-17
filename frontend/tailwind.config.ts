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
        'green-gradient': `
          radial-gradient(at 99% 99%, hsla(82, 94%, 62%, 0.13) 0px, transparent 50%),
          radial-gradient(at 4% 7%, hsla(82, 94%, 62%, 0.13) 0px, transparent 50%),
          radial-gradient(at 4% 28%, hsla(217, 72%, 8%, 1) 0px, transparent 50%),
          radial-gradient(at 4% 73%, hsla(217, 72%, 8%, 1) 0px, transparent 50%),
          radial-gradient(at 4% 49%, hsla(217, 72%, 8%, 1) 0px, transparent 50%),
          radial-gradient(at 4% 93%, hsla(217, 72%, 8%, 1) 0px, transparent 50%),
          radial-gradient(at 94% 9%, hsla(217, 72%, 8%, 1) 0px, transparent 50%),
          radial-gradient(at 4% 8%, hsla(218, 72%, 8%, 1) 0px, transparent 50%)
        `,
      },
    },
  },
  plugins: [],
} satisfies Config;

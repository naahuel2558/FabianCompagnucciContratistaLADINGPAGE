import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#111412',
        estate: '#13261B',
        ivory: '#F5F2EB',
        champagne: '#C9B282',
        wheat: '#E5D7B8',
        'bg-primary': '#F5F2EB',
        'bg-surface': '#FFFFFF',
        'bg-surface-muted': '#EBE6DC',
        'bg-dark': '#111412',
        'bg-dark-elevated': '#13261B',
        'text-primary': '#161917',
        'text-secondary': '#525854',
        'text-on-dark': '#F8F6F1',
        'text-muted-on-dark': '#A3ABA6',
        'accent-primary': '#C9B282',
        'accent-highlight': '#E5D7B8',
        'accent-agro': '#13261B',
        'accent-whatsapp': '#16A34A',
        'border-subtle': '#DDD6C7',
        'border-strong': '#C9B282',
        'border-dark': '#24352B',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        display: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 32s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

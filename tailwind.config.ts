import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0b1020',
        panel: '#121a2d',
        accent: '#6ee7d8',
        blue: '#7c9cff',
        amber: '#ffb86c',
      },
      boxShadow: {
        glow: '0 20px 60px rgba(124, 156, 255, 0.18)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;

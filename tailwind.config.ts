import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F4F2EE',
        ivory: '#F4F2EE',
        surface: '#FBFAF8',
        card: '#FBFAF8',
        border: '#E4E1DA',
        line: '#E4E1DA',
        ink: '#161616',
        muted: '#6F6B63',
        mut: '#6F6B63',
        champagne: '#C9B99A',
        accent: '#C9B99A',
        dark: '#121212',
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3rem, 8vw, 5.75rem)', { lineHeight: '0.96', letterSpacing: '-0.035em', fontWeight: '700' }],
        h1: ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '700' }],
        h2: ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        h3: ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        body: ['1rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
        label: ['12px', { lineHeight: '1', letterSpacing: '0.14em', fontWeight: '500' }],
      },
      borderRadius: {
        pill: '9999px',
        card: '30px',
      },
      boxShadow: {
        subtle: '0 30px 80px rgba(0, 0, 0, 0.08)',
        card: '0 20px 50px rgba(0, 0, 0, 0.04)',
        orb: '0 40px 80px rgba(0, 0, 0, 0.12)',
        'orb-lg': '0 50px 100px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;

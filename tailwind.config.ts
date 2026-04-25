import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        primary: {
          50: '#e8eff5', 100: '#d6e2ee', 200: '#b6ccdf', 300: '#8eafcb',
          400: '#688eaf', 500: '#466f95', 600: '#355a7d', 700: '#284867',
          800: '#203a55', 900: '#0B1F3A', 950: '#08172d',
        },
        secondary: {
          50: '#e0f5f4', 100: '#c6ecea', 200: '#a3dfdc', 300: '#7ccfcb',
          400: '#5cc8c4', 500: '#0EA5A0', 600: '#0c918c', 700: '#0a7a76',
          800: '#096764', 900: '#07524f',
        },
        accent: {
          50: '#fdf2e8', 100: '#fbe4d0', 200: '#f7c9a2', 300: '#f2ad73',
          400: '#ed9858', 500: '#E8914A', 600: '#cf7b35', 700: '#ad6429',
        },
        ink: { DEFAULT: '#1A2E45', soft: '#2c435d', muted: '#6B7E92' },
        surface: { DEFAULT: '#FAFCFE', soft: '#F4F8FB', muted: '#E8EFF5' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['4.75rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(11, 31, 58, 0.04), 0 4px 12px rgba(11, 31, 58, 0.08)',
        'medium': '0 4px 16px rgba(11, 31, 58, 0.12), 0 8px 24px rgba(11, 31, 58, 0.08)',
        'strong': '0 12px 32px rgba(11, 31, 58, 0.2), 0 4px 12px rgba(11, 31, 58, 0.12)',
        'glow': '0 0 0 1px rgba(14, 165, 160, 0.3), 0 8px 24px rgba(14, 165, 160, 0.18)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        gradient: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%23d6e2ee' stroke-width='0.5'/%3E%3C/svg%3E\")",
        'gradient-hero': 'linear-gradient(135deg, #0B1F3A 0%, #132D52 56%, #0E5C72 100%)',
        'gradient-cta': 'linear-gradient(135deg, #E8914A 0%, #cf7b35 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

export default config;

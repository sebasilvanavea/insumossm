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
          50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
          400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
          800: '#1e40af', 900: '#0B3D91', 950: '#0a2557',
        },
        secondary: {
          50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
          400: '#fbbf24', 500: '#F59E0B', 600: '#d97706', 700: '#b45309',
          800: '#92400e', 900: '#78350f',
        },
        accent: {
          50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc',
          400: '#38bdf8', 500: '#0EA5E9', 600: '#0284c7', 700: '#0369a1',
        },
        ink: { DEFAULT: '#0F172A', soft: '#1F2937', muted: '#6B7280' },
        surface: { DEFAULT: '#FFFFFF', soft: '#F8FAFC', muted: '#F1F5F9' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['4.75rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(11, 61, 145, 0.04), 0 4px 12px rgba(11, 61, 145, 0.06)',
        'medium': '0 4px 16px rgba(11, 61, 145, 0.08), 0 8px 24px rgba(11, 61, 145, 0.06)',
        'strong': '0 12px 32px rgba(11, 61, 145, 0.14), 0 4px 12px rgba(11, 61, 145, 0.08)',
        'glow': '0 0 0 1px rgba(14, 165, 233, 0.3), 0 8px 24px rgba(14, 165, 233, 0.18)',
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
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%23e2e8f0' stroke-width='0.5'/%3E%3C/svg%3E\")",
        'gradient-hero': 'linear-gradient(135deg, #0B3D91 0%, #1d4ed8 50%, #0EA5E9 100%)',
        'gradient-cta': 'linear-gradient(135deg, #F59E0B 0%, #d97706 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

export default config;

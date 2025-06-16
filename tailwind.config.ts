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
        primary: {
          DEFAULT: '#0B2545',
          light: '#1E3D5C',
          dark: '#081B35',
        },
        mint: {
          DEFAULT: '#E1F5F2',
          light: '#F0FAF8',
          dark: '#C4EAE4',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E9C1',
          dark: '#B69329',
        },
        accent: {
          blue: '#4A90E2',
          purple: '#9B51E0',
          teal: '#2DD4BF',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
        display: ['Outfit', 'Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.25)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'shadow-glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glow': '0 0 20px rgba(74, 144, 226, 0.3)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        'glass': '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|mint|gold|accent)-(light|dark|blue|purple|teal)/,
      variants: ['hover', 'focus'],
    },
  ],
};

export default config; 
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B6B',
          light: '#FFE2E2',
          dark: '#FF4444',
          100: '#FFF5F5',
          200: '#FFE2E2',
          300: '#FFC9C9',
          400: '#FFA8A8',
          500: '#FF6B6B',
          600: '#FF4444',
          700: '#FF2D2D',
          800: '#FF1A1A',
          900: '#FF0000'
        },
        accent: {
          peach: '#FFAA99',
          coral: '#FF8576',
          rose: '#FF6B6B',
          pink: '#FF8FA3',
          warm: '#FFB4A2'
        },
        neutral: {
          50: '#FEF7F7',
          100: '#FDF2F2',
          200: '#FCE7E7',
          300: '#F9D5D5',
          400: '#F3B1B1',
          500: '#E78B8B',
          600: '#D66B6B',
          700: '#B85555',
          800: '#8F4444',
          900: '#6B3333'
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#FEF7F7',
          dark: '#FDF2F2',
          warm: '#FFF5F5',
          cream: '#FDF2F2'
        },
        warm: {
          50: '#FEF7F7',
          100: '#FDF2F2',
          200: '#FCE7E7',
          300: '#F9D5D5',
          400: '#F3B1B1',
          500: '#E78B8B',
          600: '#D66B6B',
          700: '#B85555',
          800: '#8F4444',
          900: '#6B3333'
        },
        mint: '#A8E6CF',
        'mint-light': '#D4F5E9',
        dark: '#B85555',
        'dark-light': '#E78B8B',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E9C1',
          dark: '#B69329',
        },
        navy: '#1E3A8A',
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
        'soft': '0 4px 14px 0 rgba(184, 85, 85, 0.08)',
        'glass': '0 8px 32px 0 rgba(255, 107, 107, 0.15)',
        'glow': '0 0 20px rgba(255, 107, 107, 0.2)',
        'glow-strong': '0 0 30px rgba(255, 107, 107, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(255, 107, 107, 0.1)',
        'warm': '0 4px 14px 0 rgba(184, 85, 85, 0.12)'
      },
      backdropBlur: {
        'glass': '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
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
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 170, 153, 0.1) 100%)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
        'grid': "url('/patterns/grid.svg')"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|accent|neutral|warm)-(light|dark|DEFAULT|50|100|200|300|400|500|600|700|800|900|peach|coral|rose|pink|warm)/,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /(bg|text|border)-(white|black)/,
      variants: ['hover', 'focus'],
    }
  ],
};

export default config; 
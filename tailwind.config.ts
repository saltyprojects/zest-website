import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a365d',
          light: '#2a4a7f',
          dark: '#0f2240',
        },
        brass: {
          DEFAULT: '#b8860b',
          light: '#d4a017',
          dark: '#8b6508',
        },
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'body': ['1rem', { lineHeight: '1.625' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
      },
      spacing: {
        '11': '2.75rem', // 44px touch targets
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      zIndex: {
        '1': '1',
        '10': '10',
        '20': '20',
        '30': '30',
        '50': '50',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

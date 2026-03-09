import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1a365d', light: '#2a4a7f', dark: '#0f2240' },
        brass: { DEFAULT: '#b8860b', light: '#d4a017', dark: '#8b6508' },
      },
    },
  },
  plugins: [],
}
export default config

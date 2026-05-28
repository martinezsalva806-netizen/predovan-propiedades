import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.35)',
        soft: '0 10px 40px rgba(0,0,0,0.16)'
      },
      colors: {
        brand: {
          50: '#fff0f0',
          100: '#ffe0e0',
          200: '#ffbaba',
          300: '#ff8c8c',
          400: '#ff5f5f',
          500: '#e12222',
          600: '#c61c1c',
          700: '#9f1717',
          800: '#761111',
          900: '#4d0b0b'
        },
        coal: {
          50: '#f6f7f9',
          100: '#edf0f3',
          200: '#d5dbe2',
          300: '#aeb9c6',
          400: '#8391a2',
          500: '#5c6775',
          600: '#434c58',
          700: '#2d343f',
          800: '#1c2129',
          900: '#0f1318'
        },
        cream: '#f4efe6'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(225,34,34,0.22), transparent 35%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.14), transparent 22%), linear-gradient(135deg, #0f1318 0%, #161b22 40%, #11151a 100%)',
        'pearl-texture': 'linear-gradient(180deg, rgba(244,239,230,0.95), rgba(232,227,219,0.86)), radial-gradient(circle at 1px 1px, rgba(17,17,17,0.04) 1px, transparent 0)',
        'dark-grid': 'linear-gradient(transparent 95%, rgba(255,255,255,0.05) 95%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.05) 95%)'
      },
      backgroundSize: {
        grid: '32px 32px'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.06)', opacity: '1' }
        }
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2.2s ease-in-out infinite'
      }
    }
  },
  plugins: []
}

export default config

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030014',
          darker: '#02000a',
          purple: '#a855f7',
          violet: '#7c3aed',
          indigo: '#4f46e5',
          blue: '#3b82f6',
          pink: '#ec4899',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.25)',
        'glow-violet': '0 0 20px rgba(124, 58, 237, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.25)',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#f0ede8',
          200: '#e6e1d6',
          300: '#d6ccba',
          400: '#c3b298',
          500: '#b09a7a',
          600: '#9e8463',
          700: '#8b6f53',
          800: '#735e49',
          900: '#5f4e3d',
          950: '#352a20',
        },
        accent: {
          50: '#f7f7f2',
          100: '#f1efe8',
          200: '#e6e1d1',
          300: '#d5ccb0',
          400: '#c6b38a',
          500: '#b99e6d',
          600: '#ac8a5b',
          700: '#9e794c',
          800: '#7c5f3d',
          900: '#654f35',
          950: '#362a1c',
        },
        secondary: {
          50: '#f9f6f7',
          100: '#f4eff0',
          200: '#e9e2e4',
          300: '#d9cccf',
          400: '#c0acb0',
          500: '#a68d92',
          600: '#8a7277',
          700: '#776265',
          800: '#5f4e51',
          900: '#534347',
          950: '#2a2224',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
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
      },
    },
  },
  plugins: [],
};
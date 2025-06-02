/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'codecademy-dark': '#0a0e27',
        'codecademy-darker': '#050920',
        'codecademy-yellow': '#FFD23F',
        'codecademy-yellow-hover': '#FFBE0B',
        'codecademy-blue': '#646CFF',
        'codecademy-purple': '#8E44EC',
        'codecademy-green': '#4CAF50',
        'codecademy-pink': '#FF6B9D',
        'codecademy-orange': '#FF8C42',
        'text-light-gray': '#B8BCC8',
        'text-medium-gray': '#9CA0AB',
        'border-gray': '#2D3748',
      },
      fontFamily: {
        'codecademy': ['Inter', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'loading': 'loading 1.5s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        loading: {
          '0%': {
            backgroundPosition: '200% 0',
          },
          '100%': {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },
  plugins: [],
};
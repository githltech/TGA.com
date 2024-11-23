/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-in-out',
        'draw-line': 'drawLine 3s ease-in-out infinite',
        'pin-bounce': 'pinBounce 1s infinite',
      },
        keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDasharray: '0, 600' },
          '100%': { strokeDasharray: '600, 600' },
        },
        pinBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}


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
        colors: {
          primary: "#f37002",
          secordary: "#f38021",
          textwhite: "#fff",
        },
        fontWeight: {
          light1: 200, // Define custom font-weights
          regular1: 400,
          bold1: 700,
          extrabold1: 800,
        },

        fontSize: {
          xxs: '0.938rem', // Extra small font-size (10px)
          xs: '0.75rem',   // Small font-size (12px)
          sm: '0.875rem',  // Regular small (14px)
          base: '1rem',    // Default (16px)
          lg: '1.125rem',  // Large (18px)
          xl: '1.25rem',   // Extra-large (20px)
          '2xl': '1.5rem', // 2X-large (24px)
        },
        fontFamily: {
          museo: ['"Museo Sans"', 'sans-serif'], // Define the Museo Sans font
        },
      
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: "smooth",
      },
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
          primary: "#1B4D3E",
          secordary: "rgb(64,130,109)",
          textwhite: "#fff",
          primaryorange: "#FF8200", // Orange color
          secondaryblack: "#333333", // Black text color
        },
        fontWeight: {
          light1: 400,
          h3fontwgt:500,  // Define custom font-weights
          regular1: 600,
          bold1: 700,
          extrabold1: 800,
        },

        fontSize: {
          xxs: '0.938rem', // Extra small font-size (10px)
          h3size: '1.125rem',   // Small font-size (12px)
          sm: '0.875rem',  // Regular small (14px)
          base: '1rem',    // Default (16px)
          lg: '1.125rem',  // Large (18px)
          xl: '1.25rem',   // Extra-large (20px)
          '2xl': '1.5rem', // 2X-large (24px)
        },
        fontFamily: {
          museo: ['"Museo Sans"', 'sans-serif'], // Define the Museo Sans font
          sans: ["Poppins", "sans-serif"],
        },
      
    },
  },
  plugins: [],
}


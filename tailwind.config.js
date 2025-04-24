/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        philosopher: ['Philosopher', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        colors: {
          brand: '#7E1518', 
          secondary: '#ffffff',         // Optional: redefining for clarity
          'white-300': '#f1f1f1',   // Softer white
        },
      },
    },
  },
  plugins: [],
}
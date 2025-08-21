/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        // Add this line for the new display font
        'display': ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}

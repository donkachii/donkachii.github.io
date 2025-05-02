/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", "media"],
  theme: {
    extend: {
      colors: {
        primary: '#6B21A8',
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-text': '#E5E5E5'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
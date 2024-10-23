/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Jost', 'sans-serif'],
        'display': ['Jost', 'sans-serif'],
        'body': ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


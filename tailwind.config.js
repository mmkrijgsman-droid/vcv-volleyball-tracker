/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'vcv-red': '#dc2626',
        'vcv-blue': '#2563eb',
        'vcv-orange': '#fb923c',
        'vcv-yellow': '#fbbf24',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}

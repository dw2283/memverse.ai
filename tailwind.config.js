/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefaff',
          100: '#d9f2ff',
          500: '#2b8cff',
          600: '#206fe0',
          700: '#1a59b8'
        }
      }
    }
  },
  plugins: []
}


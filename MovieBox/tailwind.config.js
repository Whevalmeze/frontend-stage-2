/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    ".index.html",
],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          400: '#9CA3AF',
          500: '#6B7280',
          900: '#111827',
        },
        rose : {
          700: '#BE123C',
        },
        red: {
          600: '#9CA3AF',
        },
        lightGray: '#F3F4F680'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


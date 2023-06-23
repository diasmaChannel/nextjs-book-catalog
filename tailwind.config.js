/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
        slide_left: 'slideLeft 0.5s ease-in-out',
        slide_right: 'slideRight 0.5s ease-in-out'
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translate(100%)' },
          '100%': { transform: 'translate(0px)' },
        },
        slideRight: {
          '0%': {transform: 'translate(0px)' },
          '100%': { transform: 'translate(100%)', hidden:true },
        }
      }
    },
  },
  plugins: [],
}

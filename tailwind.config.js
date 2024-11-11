/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#49de80',
        secondary: '#16a349',
        accent: '#9C27B0',
        background: '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        poppins: ['Poppins', 'sans-serif'],

      },
    },
    fontSize: {
      'xs': '.75rem',      // Extra small
      'sm': '.875rem',     // Small
      'base': '1rem',      // Base size (default)
      'lg': '1.125rem',    // Large
      'xl': '1.25rem',     // Extra large
      '2xl': '1.5rem',     // 2x Extra large
      '3xl': '1.875rem',   // 3x Extra large
      '4xl': '2.25rem',    // 4x Extra large
      '5xl': '3rem',       // 5x Extra large
      '6xl': '4rem',       // 6x Extra large
      // Add more custom sizes if needed
      'custom-lg': '1.05rem', // Example custom large font size
    },
  },
  plugins: [],
}


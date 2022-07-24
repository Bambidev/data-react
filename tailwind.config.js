module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 15s linear infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translatey(-5px)' },
          '50%': { transform: 'translatey(5px)' },
        }
      }
    },
  },
  plugins: [],
}
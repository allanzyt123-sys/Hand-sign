export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        violet: "#6C63FF",
        aqua: "#00D1FF",
        coral: "#FF8A65",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-violet': '0 0 15px rgba(108, 99, 255, 0.5)',
        'glow-aqua': '0 0 15px rgba(0, 209, 255, 0.5)',
        'glow-coral': '0 0 15px rgba(255, 138, 101, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
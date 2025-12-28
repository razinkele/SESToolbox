/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Marine SABRES color palette
        primary: {
          50: '#e6f4f8',
          100: '#cce9f1',
          200: '#99d3e3',
          300: '#66bdd5',
          400: '#33a7c7',
          500: '#0091b9', // Main brand color
          600: '#007494',
          700: '#00576f',
          800: '#003a4a',
          900: '#001d25',
        },
        secondary: {
          50: '#f0f9f4',
          100: '#d9f0e3',
          200: '#b3e1c7',
          300: '#8cd3ab',
          400: '#66c48f',
          500: '#40b573',
          600: '#33915c',
          700: '#266d45',
          800: '#1a482e',
          900: '#0d2417',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

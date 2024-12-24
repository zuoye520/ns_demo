/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7F7FD5',
          dark: '#6B6BB8',
          light: '#9999E0'
        },
        secondary: {
          DEFAULT: '#86A8E7',
          dark: '#7291C7',
          light: '#9FBCF0'
        },
        accent: {
          DEFAULT: '#91EAE4',
          dark: '#7BC7C2',
          light: '#A8F5F0'
        },
        background: {
          DEFAULT: '#1A1B23',
          dark: '#13141A',
          light: '#22242F',
          card: '#282A37'
        }
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #1A1B23 0%, #22242F 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(40, 42, 55, 0.8) 0%, rgba(40, 42, 55, 0.6) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #7F7FD5, #86A8E7, #91EAE4)',
        'gradient-button': 'linear-gradient(135deg, #86A8E7, #91EAE4)'
      },
      boxShadow: {
        'glow': '0 0 20px rgba(127, 127, 213, 0.15)',
        'glow-lg': '0 0 30px rgba(127, 127, 213, 0.2)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
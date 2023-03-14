/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#181818',
        navy: '#0a192f',
        slate: '#8892b0',
        lightSlate: '#ccd6f6',
        greenPrimary: '#64ffda',
        greenSecondary: 'rgba(100, 255, 218, 0.1)',
      },
    },
  },
  plugins: [],
};

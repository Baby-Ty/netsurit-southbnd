module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./NetsuritLandingPage.jsx",
    "./index.js",
    "./App.js",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#f9fafb',
        },
        teal: require('tailwindcss/colors').teal,
      },
    },
  },
  plugins: [],
}; 
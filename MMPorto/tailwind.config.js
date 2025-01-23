/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./sectionList/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6', // Warna utama
        secondary: '#06B6D4', // Warna sekunder
        accent: '#D1D5DB',
        normal: '#111827',
      },
    },  
  },
  plugins: [],
}


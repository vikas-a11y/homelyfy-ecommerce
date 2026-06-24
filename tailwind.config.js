/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],  // headings ke liye
        body: ['Roboto', 'sans-serif'],      // paragraphs / body ke liye
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // 自定义小于等于 680px 的断点
      'max-680': { 'max': '680px' }
    },
  },
  plugins: [],
}


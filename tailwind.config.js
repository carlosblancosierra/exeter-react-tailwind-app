/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '9/16': '9 / 16',
      },
    }
  },
  plugins: [],
}


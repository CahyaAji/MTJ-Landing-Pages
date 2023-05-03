/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white-blue': '#C8E7F2',
      'white-snow': '#F5FEFD',
      'white-bone': '#E7DECC',
      "blue-light": '#115173',
      'blue-mid': '#053F5E',
      'blue-deep': '#022C43',
    }
  },
  darkMode: 'class',
  plugins: [],
}

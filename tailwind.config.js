/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D35933',
          light: '#F7EEEC',
          dark: '#B54324',
        },
        zinc: '#F6F7F9',
        slate: '#E6EAF1',
        stone: '#A8A29E',
        gray: '#6A7187',
        dark: '#080133',
      },
      borderColor: {
        DEFAULT: '#E6EAF1',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

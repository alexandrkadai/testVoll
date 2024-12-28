/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    screens: {
      'wn': '1366px',
      // => @media (min-width: 1366px) { ... }

      'mair': '1440px',
      // => @media (min-width: 768px) { ... }

      'mpro': '1512px',
      // => @media (min-width: 1024px) { ... }

      'fuhd': '1920px',
      // => @media (min-width: 1280px) { ... }

      '2k': '2560px',
      // => @media (min-width: 1536px) { ... }
      '4k': '3840px',
    }
  },
  plugins: [],
}


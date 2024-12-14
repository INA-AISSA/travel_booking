/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',  // for App Router (Next.js 13+)
    './pages/**/*.{js,jsx,ts,tsx}',  // for legacy pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



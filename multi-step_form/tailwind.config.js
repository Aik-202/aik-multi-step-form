/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url(/src/Data/images/bg-sidebar-desktop.svg)",
        'mobile': "url(/src/Data/images/bg-sidebar-mobile.svg)"
      },
      colors: {
        'marine': "hsl(213, 96%, 18%)",
        'purplish': "hsl(243, 100%, 62%)",
        'pastel': "hsl(228, 100%, 84%)",
        'light-blue': "hsl(206, 94%, 87%)",
        'red': "hsl(354, 84%, 57%)",

        'cool': "hsl(231, 11%, 63%)",
        'light-gray': "hsl(229, 24%, 87%)",
        'magnolia': "hsl(217, 100%, 97%)",
        'alabaster': "hsl(231, 100%, 99%)",
        'white': "hsl(0, 0%, 100%)"
      }
    },
  },
  plugins: [],
}


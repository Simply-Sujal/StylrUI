/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // or 'media' if you prefer system preference
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        smoothBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
      animation: {
        smoothBounce: 'smoothBounce 1s ease-in-out infinite',
      },
    },
    fontFamily: {
      mukta: ["Mukta", "sans-serif"],
      mulsih: ["Mulish", "sans-serif"],
      asap: ["Asap", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      dancing: ["Dancing Script", "cursive"]
    }
  },
  plugins: [],
}

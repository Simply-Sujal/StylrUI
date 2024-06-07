/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      mukta: ["Mukta", "sans-serif"],
      mulsih: ["Mulish", "sans-serif"],
      asap: ["Asap", "sans-serif"],
      roboto: ["Roboto", "sans-serif"]
    }
  },
  plugins: [],
}
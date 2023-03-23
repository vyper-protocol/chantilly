/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require("prettier-plugin-tailwindcss")],

  daisyui: {
    themes: ["night", "lemonade", "light", "dark", "cupcake", "retro"],
  },
};

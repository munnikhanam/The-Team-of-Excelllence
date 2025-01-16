/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-texture": "url('/public/bg-shadow.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};

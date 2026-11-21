/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#102542",
          900: "#0b1a30",
          800: "#102542",
          700: "#1a3560",
          600: "#27487d",
        },
        mist: {
          DEFAULT: "#E9EDF2",
          200: "#f3f5f8",
          400: "#cfd6e0",
          600: "#6b7a90",
        },
      },
      fontFamily: {
        heading: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
      mono: ["Roboto Mono", "ui-monospace", "SFMono-Regular"],
    },
    extend: {
      colors: {
        primary: "#EC6B2D",
        secondary: "#333333",
        onPrimary: "#FFFFFF",
        onSecondary: "#FFFFFF",
        background: "#E3E3E3",
        text: "#000003",
        surface: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

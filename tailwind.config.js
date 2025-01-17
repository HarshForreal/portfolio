// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        editorialRegular: ["CustomFontRegular", "sans-serif"],
        editorialLightItalic: ["CustomFontUltraLightItalic", "sans-serif"],
        editorialLight: ["CustomFontUltraLight", "sans-serif"],
      },
    },
  },
  plugins: [],
};

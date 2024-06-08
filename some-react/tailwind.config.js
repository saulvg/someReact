/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: "2rem",
      center: true,
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".containerWithBorder": {
          padding: "1rem",
          margin: "1rem",
          border: "1px solid #000",
          borderRadius: ".25rem",
        },
        ".anotherCustomClass": {
          padding: "2rem",
          margin: "0.5rem",
          backgroundColor: "#f0f0f0",
          borderRadius: "0.5rem",
        },
        // Puedes añadir más clases personalizadas aquí
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

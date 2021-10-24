module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "668px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

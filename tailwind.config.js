/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFBF6",
        red: {
          light: "#F2B4AE",
          DEFAULT: "#E46764",
        },
        orange: {
          DEFAULT: "#F0AF63",
        },
        green: {
          DEFAULT: "#CFDFCB",
        },
        blue: {
          DEFAULT: "#A5B8DF",
        },
        grey: {
          light: "#D9D9D9",
          DEFAULT: "#4F4F4F",
        },
      },
    },
  },
  plugins: [],
};

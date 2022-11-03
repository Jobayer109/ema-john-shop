/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#75cc3b",

        secondary: "#f92d04",

        accent: "#96d8f2",

        neutral: "#27313A",

        "base-100": "#FCFCFC",

        info: "#809AD6",

        success: "#14AD75",

        warning: "#A77206",

        error: "#FC4A77",
      },
    },
  ],
  plugins: [require("daisyui")],
};

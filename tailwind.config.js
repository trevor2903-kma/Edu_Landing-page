/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f2fb",
          100: "#cce4f7",
          200: "#99c9ef",
          300: "#66ade6",
          400: "#3392de",
          500: "#0072BC", // 🎯 PRIMARY GỐC
          600: "#005a96",
          700: "#004170",
          800: "#00294a",
          900: "#001224",
        },
      },
    },
  },
  plugins: [],
};

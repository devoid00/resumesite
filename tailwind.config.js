/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#e6edf3",
        mute: "#9aa4af",
        panel: "#0b0f14",
        canvas: "#05080c",
        accent: "#3a66f7",
      },
      borderRadius: { xl: "16px", "2xl": "22px" },
      boxShadow: { soft: "0 8px 20px rgba(0,0,0,0.35)" },
    },
  },
  plugins: [],
};

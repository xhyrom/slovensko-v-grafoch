/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        primaryDotted: "radial-gradient(#355DFD 2px, #214DFF 2px)",
      },
      backgroundSize: {
        primaryDottedSize: "15px 15px",
      },
    },
  },
  plugins: [],
};

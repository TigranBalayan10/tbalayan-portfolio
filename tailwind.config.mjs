/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        tikotheme: {
          primary: "#ff00ff",
          "primary-content": "#e5d9ff",
          secondary: "#00e9ff",
          "secondary-content": "#001316",
          accent: "#00a1ff",
          "accent-content": "#000916",
          neutral: "#4a4a4a",
          "neutral-content": "#cdccc8",
          "base-100": "#1c1917",
          "base-200": "#3c1c75",
          "base-300": "#2c1c55",
          "base-content": "#e0e0e0",
          info: "#00afff",
          "info-content": "#000b16",
          success: "#00f08d",
          "success-content": "#001407",
          warning: "#ff8c00",
          "warning-content": "#1f1100",
          error: "#ff3860",
          "error-content": "#3f000a",
        },
      },
    ],
  },
};

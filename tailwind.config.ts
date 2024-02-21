import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        screen: "100svh",
      },
      minHeight: {
        screen: "100svh",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/container-queries"), require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          "primary": "#972175",
          "secondary": "#94d19f",
          "accent": "#74b8c4",
          "neutral": "#34182c",
          "base-100": "#f9f2f7",
        },
        dark: {
          "primary": "#972175",
          "secondary": "#2e6b39",
          "accent": "#3c7f8b",
          "neutral": "#36172e",
          "base-100": "#0e060c",
        },
      },
    ],
  },
};
export default config;

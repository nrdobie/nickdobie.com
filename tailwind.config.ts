import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/container-queries"), require("daisyui")],

  daisyui: {
    themes: [
      {
        "my-theme": {
          "primary": "hsl(317, 64%, 36%)",
          "secondary": "hsl(14, 51%, 73%)",
          "accent": "hsl(40, 51%, 62%)",
          "base-100": "hsl(334, 47%, 97%)",
          "neutral": "hsl(322, 52%, 4%)",
        },
        "my-theme-dark": {
          "prefers-color-scheme": "dark",
          "neutral": "hsl(322, 52%, 96%)",
          "base-100": "hsl(334, 47%, 3%)",
          "primary": "hsl(317, 64%, 36%)",
          "secondary": "hsl(14, 51%, 27%)",
          "accent": "hsl(40, 51%, 38%)",
        },
      },
    ],
  },
};
export default config;

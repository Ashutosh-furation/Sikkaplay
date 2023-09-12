import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-red": "rgba(173, 11, 64, 0.8784)",
        "custom-green": "rgba(255, 25, 23, 1)",
        Secondary: "#CA2446",
        Background: "#0E0D0C",
        GreyDark: "#1E1E1E",
        GreyLight: "#636363",
      },
    },
  },
  plugins: [],
  fontFamily: {
    marbley: ["marbley"],
  },
};
export default config
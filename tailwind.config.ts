import type { Config } from "tailwindcss";

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
        primary: "#EA526F",
        secondary: "#070600",
        ghostWhite: "#F7F7FF",
        pacificCyan: "#23B5D3",
      },
      // pallet 2:
      // colors: {
      //   primary: "#0A0908",
      //   secondary: "#623CEA",
      //   third: "#FFFAFF",
      //   fourth: "#F2545B",
      // },
    },
  },
  plugins: [],
};
export default config;

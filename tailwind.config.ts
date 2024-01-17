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
      // colors: {
      //   primary: "#EA526F",
      //   "primary-darker": "#d14560",
      //   secondary: "#070600",
      //   colorThree: "#F7F7FF",
      //   colorFour: "#23B5D3",
      // },
      // pallet 2:
      // colors: {
      //   primary: "#0A0908",
      //   "primary-darker": "#d14560",
      //   secondary: "#623CEA",
      //   colorThree: "#FFFAFF",
      //   colorFour: "#F2545B",
      // },
      // pallete 3:
      // colors: {
      //   primary: "#102542",
      //   "primary-darker": "#d14560",
      //   secondary: "#102542",
      //   colorThree: "#F7F7FF",
      //   colorFour: "#279AF1",
      // },
      // pallete 4:
      colors: {
        primary: "#087E8B",
        "primary-darker": "#043f45",
        secondary: "#FF5A5F",
        colorThree: "#BFD7EA",
        colorFour: "#0B3954",
      },
      spacing: {
        smScreenNav: "20vh",
        smScreenNoNav: "80vh",
        mdScreenNav: "12.5vh",
        mdScreenNoNav: "87.5vh",
      },
    },
  },
  plugins: [],
};
export default config;

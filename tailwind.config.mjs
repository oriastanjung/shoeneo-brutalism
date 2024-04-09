/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
		fontSize : {
			"4xl" : "2.5rem"	
		},
      colors: {
        black: "#191918",
        green: {
          300: "#E5F33C",
        },
        yellow: {
          500: "#FFB800",
        },
        purple: {
          300: "#FFCAFD",
          500: "#FF77FA",
        },
        orange: {
          100: "#FFFAEA",
          500: "#FF9900",
          700: "#FE682F",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        shimmer: "shimmer 5s linear infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				popsans: ['"Poppins"', "sans-serif"],
				poly: ["Poly", "serif"],
			},
			colors: [
				{
					Lprimary: "#C0B9DD",
					Lsecondary: "#DED9E2",
					Rcolor: "#FFBCBC",
					"Rcolor-2": "#B3C4FD",
					"Rcolor-3": "#D0FDA2",
					"Rcolor-4": "#FBABFD",
					"Rcolor-5": "#FFD597",
					black: "#000",
					white: "#F7F4EA",
					gray: "#777",
					Dprimary: "#5840BA",
					Dsecondary: "#F2F2F2",
					DOrange: "#FEBC3A",
					"DOrange-light": "#D6DFEE",
				},
			],
		},
	},
	plugins: [],
};

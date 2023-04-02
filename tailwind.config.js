/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				main_color: "#2196f3",
				main_color_alt: "#1787e0",
				section_background: "#ececec",
			},
			metrics: {
				main_transition: ".3s",
				main_padding_top: "100px",
				main_padding_bottom: "100px",
			},
		},
	},
	plugins: [],
};

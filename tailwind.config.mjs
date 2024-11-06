/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
		  'base': ['1.25rem', '1.8rem'],
		  'lg': ['1.5rem', '1.8rem'],
		  'xl': ['1.8rem', '2.5rem'],
		  '2xl': ['2.5rem', '3.25rem'],
		  '3xl': ['3.052rem', '4rem'],
		},
		extend: {},
	},
	plugins: [],
}

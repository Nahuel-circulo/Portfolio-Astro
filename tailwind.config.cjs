/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'my-purple': '#7B4AE2',
        'my-white': '#EEEEEE',
        'my-gray': '#84868A',
        'my-dark-purple': '#0F1120',
        'my-very-dark-purple': '#090E16'

      },
      fontFamily: {
        poppins: 'Poppins, sans-serif'

      }
    },
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}", "index.html"],
    theme: {
        extend: {
            colors: {
                "f-blue": {
                    50: "#CEDBFF",
                    100: "#BACCFF",
                    200: "#91ADFF",
                    300: "#688FFF",
                    400: "#3F71FF",
                    500: "#1652FF",
                    600: "#003DED",
                    700: "#0033C4",
                    800: "#00289B",
                    900: "#001A63",
                },
                "f-pink": {
                    50: "#FEFAFC",
                    100: "#FCE8EF",
                    200: "#F8C3D6",
                    300: "#F39FBE",
                    400: "#EF7BA5",
                    500: "#EA568C",
                    600: "#E63273",
                    700: "#C81858",
                    800: "#961242",
                    900: "#640C2C",
                },
				'f-orange': {
					50: '#FFF1DC',
					100: '#FFE9C7',
					200: '#FFD99F',
					300: '#FFC876',
					400: '#FFB84D',
					500: '#FFA215',
					600: '#DC8400',
					700: '#A46200',
					800: '#6C4100',
					900: '#331F00'
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	]
};

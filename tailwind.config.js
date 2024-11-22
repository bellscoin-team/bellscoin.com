import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			Glowing: ['GlowingBubble', 'sans-serif'],
			chelsea: "'Chelsea Market', system-ui",
			mitr: "'Mitr', sans-serif",
			mochiy: "'Mochiy Pop P One', sans-serif",
			mogra: "'Mogra', system-ui",
			oleo: "'Oleo Script', system-ui",
			senior: "'PC Senior', sans-serif",
		},
		extend: {
			animation: {
				blink: 'blink 1s step-end infinite',
			},
			dropShadow: {
				bubble: '15px 15px 8px rgba(0, 0, 0, 0.6)',
			},
			keyframes: {
				blink: {
					'50%': { opacity: 0 },
				},
				'horizontal-shaking': {
					'0%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(5px)' },
					'50%': { transform: 'translateX(-5px)' },
					'75%': { transform: 'translateX(5px)' },
					'100%': { transform: 'translateX(0)' },
				},
				shaking: {
					'0%': { transform: 'translateX(0) rotate(0)' },
					'15%': { transform: 'translateX(0) rotate(0)' },
					'25%': { transform: 'rotate(0)' },
					'35%': { transform: 'rotate(17deg)' },
					'55%': { transform: 'rotate(-17deg)' },
					'65%': { transform: 'rotate(17deg)' },
					'75%': { transform: 'rotate(-17deg)' },
					'85%': { transform: 'rotate(0)' },
					'100%': { transform: 'rotate(0)' },
				},
				'jump-shaking': {
					'0%': { transform: 'translateX(0) rotate(0)' },
					'15%': { transform: 'translateX(0) rotate(0)' },
					'25%': { transform: 'translateY(-9px) rotate(0)' },
					'35%': { transform: 'translateY(-9px) rotate(17deg)' },
					'55%': { transform: 'translateY(-9px) rotate(-17deg)' },
					'65%': { transform: 'translateY(-9px) rotate(17deg)' },
					'75%': { transform: 'translateY(-9px) rotate(-17deg)' },
					'85%': { transform: 'translateY(0) rotate(0)' },
					'100%': { transform: 'translateY(0) rotate(0)' },
				},
				'jump-shaking-2': {
					'0%': { transform: 'translateY(0) rotate(0)' },
					'33%': { transform: 'translateY(-46px) rotate(2.53deg)' },
					'66%': { transform: 'translateY(-14.5px) rotate(-2.15deg)' },
				},
				pop: {
					from: { transform: 'scale(0)' },
					to: { transform: 'scale(100%)' },
				},
				rattling: {
					'0%': { transform: 'translateY(0) rotate(0)' },
					'3%': { transform: 'translateY(-10px) rotate(2deg)' },
					'6%': { transform: 'translateY(-20px) rotate(0)' },
					'9%': { transform: 'translateY(-10px) rotate(-2deg)' },
					'12%': { transform: 'translateY(0) rotate(0)' },
					'20%': { transform: 'translateY(-60px) rotate(4deg)' },
					'23%': { transform: 'translateY(-60px) rotate(3deg)' },
					'26%': { transform: 'translateY(-40px) rotate(1deg)' },
					'29%': { transform: 'translateY(-20px) rotate(-1deg)' },
					'32%': { transform: 'translateY(0) rotate(-3deg)' },
					'35%': { transform: 'translateY(0) rotate(3deg)' },
					'38%': { transform: 'translateY(-10px) rotate(1deg)' },
					'42%': { transform: 'translateY(0) rotate(-1deg)' },
					'45%': { transform: 'translateY(0) rotate(0)' },
					'60%': { transform: 'translateY(0) rotate(1deg)' },
					'80%': { transform: 'translateY(0) rotate(-1deg)' },
					'100%': { transform: 'translateY(0) rotate(0)' },
				},
				'slide-down': {
					from: { top: '0%' },
					to: { top: '100%' },
				},
				'slide-left': {
					from: { right: '-40%' },
					to: { right: '100%' },
				},
				pendulum: {
					'0%': { transform: 'rotate(-10deg)' },
					'100%': { transform: 'rotate(10deg)' },
				},
			},
			textShadow: {
				DEFAULT: '15px 15px 15px rgba(0, 0, 0, 0.6)',
			},
		},
		letterSpacing: { 305: '0.305em' },
		screens: {
			lg: '1300px',
		},
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'animation-delay': (value) => ({
						'animation-delay': value,
					}),
				},
				{
					values: theme('transitionDelay'),
				},
			)
		}),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') },
			)
		}),
		function ({ addUtilities }) {
			addUtilities({
                '.text-stroke_10': {
					'-webkit-text-stroke': '10px black',
				},
				'.text-stroke_6': {
					'-webkit-text-stroke': '6px black',
				},
                '.text-stroke_2': {
					'-webkit-text-stroke': '2px black',
				},
			})
		},
	],
}

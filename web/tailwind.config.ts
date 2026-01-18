import type {Config} from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				archivo: ['Archivo', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				orange: {
					50: 'hsl(var(--orange-50))',
					100: 'hsl(var(--orange-100))',
					200: 'hsl(var(--orange-200))',
					300: 'hsl(var(--orange-300))',
					400: 'hsl(var(--orange-400))',
					500: 'hsl(var(--orange-500))',
					600: 'hsl(var(--orange-600))',
					700: 'hsl(var(--orange-700))',
					800: 'hsl(var(--orange-800))',
					900: 'hsl(var(--orange-900))',
				},
				'red-purple': {
					50: 'hsl(var(--red-purple-50))',
					100: 'hsl(var(--red-purple-100))',
					200: 'hsl(var(--red-purple-200))',
					300: 'hsl(var(--red-purple-300))',
					400: 'hsl(var(--red-purple-400))',
					500: 'hsl(var(--red-purple-500))',
					600: 'hsl(var(--red-purple-600))',
					700: 'hsl(var(--red-purple-700))',
					800: 'hsl(var(--red-purple-800))',
					900: 'hsl(var(--red-purple-900))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground':
						'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground':
						'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
				},
			},
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(var(--tw-gradient-stops))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				spinSlow: {
					'0%': {transform: 'rotate(0deg)'},
					'100%': {transform: 'rotate(360deg)'},
				},
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
				first: {
					'0%': { transform: 'translateY(-50%) translateX(-50%) rotate(0deg) scale(1)' },
					'50%': { transform: 'translateY(-50%) translateX(-50%) rotate(180deg) scale(1.1)' },
					'100%': { transform: 'translateY(-50%) translateX(-50%) rotate(360deg) scale(1)' },
				},
				second: {
					'0%': { transform: 'translateY(-50%) translateX(-50%) rotate(0deg) scale(1)' },
					'50%': { transform: 'translateY(-50%) translateX(-50%) rotate(-180deg) scale(0.9)' },
					'100%': { transform: 'translateY(-50%) translateX(-50%) rotate(-360deg) scale(1)' },
				},
				third: {
					'0%': { transform: 'translateY(-50%) translateX(-50%) rotate(0deg) scale(1)' },
					'50%': { transform: 'translateY(-50%) translateX(-50%) rotate(180deg) scale(1.2)' },
					'100%': { transform: 'translateY(-50%) translateX(-50%) rotate(360deg) scale(1)' },
				},
				fourth: {
					'0%': { transform: 'translateY(-50%) translateX(-50%) rotate(0deg) scale(1)' },
					'50%': { transform: 'translateY(-50%) translateX(-50%) rotate(-180deg) scale(1.1)' },
					'100%': { transform: 'translateY(-50%) translateX(-50%) rotate(-360deg) scale(1)' },
				},
				fifth: {
					'0%': { transform: 'translateY(-50%) translateX(-50%) rotate(0deg) scale(1)' },
					'50%': { transform: 'translateY(-50%) translateX(-50%) rotate(180deg) scale(0.8)' },
					'100%': { transform: 'translateY(-50%) translateX(-50%) rotate(360deg) scale(1)' },
				},
			},
			animation: {
				'spin-slow': 'spinSlow 3s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				first: 'first 10s ease infinite',
				second: 'second 10s ease infinite',
				third: 'third 10s ease infinite',
				fourth: 'fourth 10s ease infinite',
				fifth: 'fifth 10s ease infinite',
			},
			boxShadow: {
				glow: '0 0 8px rgba(255,255,255,0.75)',
			},
		},
	},
	plugins: [animate],
} satisfies Config


import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	// Update the colors section in your tailwind config
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['SF Pro Display', 'Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				hackathon: {
					primary: '#4dabf7',    // Bright blue
					secondary: '#e9ecef',  // Light text
					accent: '#1e2a3a',     // Dark bluish background
					light: '#e9ecef',      // Light text
					dark: '#0f172a',       // Very dark blue background
					terminal: {
						bg: '#1A1F2C',
						text: '#E4E6EB',
						accent: '#4dabf7',
						command: '#64D9EF',
						success: '#A6E22E',
						error: '#F92672'
					}
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			perspective: {
				'1000': '1000px',
			},
			rotate: {
				'y-10': 'rotateY(10deg)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'subtle-float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				"typing": {
					"0%": { width: "0%" },
					"100%": { width: "100%" }
				},
				"blink": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"rotate-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				},
				"pulse-glow": {
					"0%, 100%": { boxShadow: "0 0 10px 3px rgba(0, 113, 227, 0.3)" },
					"50%": { boxShadow: "0 0 20px 5px rgba(0, 113, 227, 0.5)" }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'subtle-float': 'subtle-float 6s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 15s ease infinite',
				"cursor-blink": "blink 1s step-end infinite",
				"typing": "typing 3.5s steps(40, end)",
				"float": "float 6s ease-in-out infinite",
				"rotate-slow": "rotate-slow 20s linear infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite"
			},
			boxShadow: {
				'3d': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.2), 0 -2px 6px -2px rgba(255, 255, 255, 0.1)',
				'3d-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.2), 0 -4px 10px -4px rgba(255, 255, 255, 0.15)',
				'terminal': '0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 20px rgba(0, 0, 0, 0.3), 0 20px 40px rgba(0, 0, 0, 0.1)'
			},
			transformStyle: {
				'3d': 'preserve-3d'
			},
			translate: {
				'3d': 'translateZ(60px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

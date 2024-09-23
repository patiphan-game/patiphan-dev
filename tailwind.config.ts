import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		  colors: {
			  background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
				  DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		transitionTimingFunction: {
			  "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
			},
			keyframes:{
			  "reveal-up": {
			  "0%": { opacity: "0", transform: "translateY(80%)" },
			  "100%": { opacity: "1", transform: "translateY(0)" },
			},
			"reveal-down": {
			  "0%": { opacity: "0", transform: "translateY(-80%)" },
			  "100%": { opacity: "1", transform: "translateY(0)" },
			},
			  "content-blur": {
			  "0%": { filter: "blur(0.3rem)" },
			  "100%": { filter: "blur(0)" },
			},
		},
	},
},
plugins: [require("tailwindcss-animate")],
};
export default config;

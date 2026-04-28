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
  			background: '#0D0B1E',
  			surface: '#13112A',
  			card: '#1A1744',
  			primary: {
  				DEFAULT: '#7C5CFC',
  				hover: '#6244E5'
  			},
  			accent: '#A78BFA',
  			'text-secondary': '#9B8EC4',
  			'text-tertiary': '#5B5380',
  			foreground: 'hsl(var(--foreground))',
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
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
  		fontFamily: {
  			sans: [
  				'DM Sans',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			pill: '100px',
  			card: '20px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			card: '0 8px 32px rgba(124,92,252,0.15)',
  			button: '0 4px 20px rgba(124,92,252,0.4)',
  			glow: '0 20px 60px rgba(124,92,252,0.2)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

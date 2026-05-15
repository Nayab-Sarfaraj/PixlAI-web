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
  				hover: '#6E4DF0'
  			},
  			accent: '#A78BFA',
  			'text-secondary': '#9B8EC4',
  			'text-tertiary': '#5B5380',
  			foreground: '#FFFFFF',
  			border: 'rgba(255,255,255,0.08)',
  			input: '#1A1744',
  			ring: '#7C5CFC',
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			pill: '100px',
  			card: '24px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			card: '0 8px 32px rgba(0,0,0,0.4)',
  			button: '0 4px 14px rgba(124,92,252,0.25)',
  		},
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

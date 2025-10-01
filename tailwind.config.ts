import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#ffffff',
        'secondary-bg': '#f5f5f5',
        'primary-text': '#2c2c2c',
        'secondary-text': '#666666',
        'accent-teal': '#00a896',
        'accent-navy': '#3a5a78',
        'border': '#e0e0e0',
        'success-green': '#10b981',
        'warning-amber': '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
export default config

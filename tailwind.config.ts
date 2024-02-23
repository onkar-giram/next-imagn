import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontSize: {
      'heading-1': ['3.815rem', '73.2px'],
      'heading-2': ['3.052rem', '56.6px'],
      'heading-3': ['2.441rem', '46.8px'],
      'heading-4': ['1.953rem', '37.5px'],
      'heading-5': ['1.563rem', '30px'],
      'subtitle-1': ['1.266rem', '26.2px'],
      'subtitle-2': ['1.125rem', '21.6px'],
      'subtitle-3': ['1rem', '20.8px'],
      'subtitle-4': ['0.889rem', '18.5px'],
      'subtitle-5': ['0.75rem', '16px'],
      'body-1': ['1.266rem', '30.3px'],
      'body-2': ['1.125rem', '27px'],
      'body-3': ['1rem', '24px'],
      'body-4': ['0.889rem', '21.3px'],
      caption: ['0.75rem', '16px']
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif']
    },
    extend: {
      screens: {
        sm: '600px',
        md: '905px',
        lg: '1240px',
        xl: '1440px'
      },
      colors: {
        global: {
          title: '#001A3D',
          'brand-body': '#4F5B6B',
          'medical-billing-blue': '#4192D4',
          'im-bg-1': '#F8FEF0',
          'im-bg-2': '#DEF0FF',
          'feature-background': '#F6FFEB',
          'feature-heading': '#747F8C',
          'custom-border-blue': '#008BFD',
          'confirm-button': '#34A921',
          'custom-card-blue': '#EDF7FF',
          'custom-bg-doctor-booking': '#EFFAE1'
        },
        im: {
          'bg-2': '#DBEDC2',
          300: '#B2E075',
          400: '#93D143',
          'brand-accent': '#76BF17',
          600: '#609E0E',
          link: '#4A7D07',
          800: '#355C03'
        },
        grey: {
          100: '#F8F8F9',
          200: '#F0F1F2',
          300: '#E1E3E6',
          400: '#C3C7CD',
          500: '#A6ACB5',
          600: '#89929D'
        }
      }
    }
  },
  plugins: []
}
export default config

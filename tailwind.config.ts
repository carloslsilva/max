import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-title)', ...defaultTheme.fontFamily.sans],
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: { ...colors.stone, DEFAULT: colors.cyan[600] },
        'ultra-violet': {
          DEFAULT: '#665c84',
          900: '#14121a',
          800: '#292535',
          700: '#3d374f',
          600: '#524a6a',
          500: '#665c84',
          400: '#8278a1',
          300: '#a29ab9',
          200: '#c1bcd0',
          100: '#e0dde8'
        },
        tomato: {
          DEFAULT: '#ff7657',
          900: '#440d00',
          800: '#891900',
          700: '#cd2600',
          600: '#ff3e12',
          500: '#ff7657',
          400: '#ff9178',
          300: '#ffad9a',
          200: '#ffc8bc',
          100: '#ffe4dd'
        },
        'hunyadi-yellow': {
          DEFAULT: '#ffba5a',
          900: '#452800',
          800: '#8b5100',
          700: '#d07900',
          600: '#ff9e16',
          500: '#ffba5a',
          400: '#ffc97c',
          300: '#ffd69d',
          200: '#ffe4be',
          100: '#fff1de'
        },
        'floral-white': {
          DEFAULT: '#fcf9ed',
          900: '#54460e',
          800: '#a78c1c',
          700: '#e0c146',
          600: '#eedd9a',
          500: '#fcf9ed',
          400: '#fdfaf1',
          300: '#fdfbf5',
          200: '#fefdf8',
          100: '#fefefc'
        },
        onyx: {
          DEFAULT: '#2e3532',
          900: '#090a0a',
          800: '#121514',
          700: '#1b1f1d',
          600: '#242927',
          500: '#2e3532',
          400: '#53605b',
          300: '#7a8c84',
          200: '#a7b2ad',
          100: '#d3d9d6'
        }
      }
    }
  }
}

export default config

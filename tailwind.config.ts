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
        title: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        base: ['var(--font-nunito)', ...defaultTheme.fontFamily.sans],
        sans: ['var(--font-nunito)', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: ['var(--font-fira-code)', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: { ...colors.stone, DEFAULT: colors.stone[600] }
      }
    }
  }
}

export default config

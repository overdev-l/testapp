import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      dark: {
        colors: {
          background: "#030712",
          foreground: "#1e293b",
          primary: {
            '50': '#f5f3ff',
            '100': '#ede9fe',
            '200': '#ddd6fe',
            '300': '#c4b5fd',
            '400': '#a78bfa',
            '500': '#8b5cf6',
            '600': '#7c3aed',
            '700': '#6d28d9',
            '800': '#5b21b6',
            '900': '#4c1d95',
          },
          focus: "#8B5CF6"
        }
      },
      light: {
        colors: {
          background: "#f9fafb",
          foreground: "#e2e8f0",
          primary: {
            '50': '#f5f3ff',
            '100': '#ede9fe',
            '200': '#ddd6fe',
            '300': '#c4b5fd',
            '400': '#a78bfa',
            '500': '#8b5cf6',
            '600': '#7c3aed',
            '700': '#6d28d9',
            '800': '#5b21b6',
            '900': '#4c1d95',
          },
          focus: "#8B5CF6"
        }
      }
    }
  })]
}
export default config

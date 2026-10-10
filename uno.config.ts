import { defineConfig } from 'unocss'

// Values live in style.css so utilities, scoped CSS and diagrams share a palette.
const brand = Object.fromEntries(
  [
    'coral',
    'coral-strong',
    'highlight',
    'violet',
    'ink',
    'body',
    'slate',
    'muted',
    'gray',
    'line',
    'surface',
    'wash'
  ].map(name => [`viadee-${name}`, `var(--viadee-${name})`])
)

export default defineConfig({
  theme: {
    colors: {
      ...brand,
      // Existing FH utility classes continue to work with viadee colors.
      'fh-blue': brand['viadee-violet'],
      'fh-dark-blue': brand['viadee-violet'],
      'fh-navy': brand['viadee-ink'],
      'fh-orange': brand['viadee-highlight'],
      'fh-gray': brand['viadee-gray'],
      'fh-slate': brand['viadee-slate'],
      'fh-muted': brand['viadee-muted'],
      'fh-line': brand['viadee-line'],
      'fh-50': brand['viadee-surface'],
      primary: {
        DEFAULT: brand['viadee-violet'],
        dark: brand['viadee-ink'],
        light: brand['viadee-surface']
      },
      secondary: { DEFAULT: brand['viadee-coral'] },
      // Neutral instead of blue-tinted grays, so text-gray-* matches the palette.
      gray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717'
      }
    }
  }
})

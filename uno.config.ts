import { defineConfig } from 'unocss'

// Values live in style.css so utilities, scoped CSS and diagrams share a palette.
const brand = Object.fromEntries(
  ['coral', 'highlight', 'violet', 'ink', 'slate', 'muted', 'gray', 'line', 'surface'].map(name => [
    `viadee-${name}`,
    `var(--viadee-${name})`
  ])
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
      secondary: { DEFAULT: brand['viadee-coral'] }
    }
  }
})

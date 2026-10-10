import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'fh-blue': '#0066b3',
      'fh-dark-blue': '#003978',
      'fh-navy': '#10245e',
      'fh-orange': '#f79646',
      'fh-gray': '#6b7280',
      'fh-slate': '#4a6f94',
      'fh-muted': '#8a8b93',
      'fh-line': '#dfe3ea',

      primary: {
        DEFAULT: '#0066b3',
        dark: '#003978',
        light: '#4d94d1'
      },
      secondary: {
        DEFAULT: '#f79646'
      }
    }
  }
})

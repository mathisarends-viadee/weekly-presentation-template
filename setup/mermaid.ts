import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(async () => {
  // Labels are sized from measured text; measuring before Geist loads clips them.
  await document.fonts.load("16px 'Nunito Sans Variable'")

  const styles = getComputedStyle(document.documentElement)
  const color = (name: string) => styles.getPropertyValue(`--viadee-${name}`).trim()

  return {
    theme: 'base',
    htmlLabels: false,
    flowchart: { htmlLabels: false, padding: 14, rankSpacing: 90, nodeSpacing: 40 },
    // Flat nodes instead of the base theme's drop shadows.
    themeCSS:
      '.node rect, .node path, .node polygon, .node circle { filter: none !important; } .node rect { rx: 6px; ry: 6px; }',
    themeVariables: {
      fontFamily: "'Nunito Sans Variable', sans-serif",
      fontSize: '16px',
      primaryColor: color('wash'),
      primaryTextColor: color('ink'),
      primaryBorderColor: color('gray'),
      lineColor: color('muted'),
      secondaryColor: '#ffffff',
      tertiaryColor: color('surface'),
      edgeLabelBackground: '#ffffff'
    }
  }
})

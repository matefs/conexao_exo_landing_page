export const theme = {
  colors: {
    ink: '#090909',
    inkSoft: '#171717',
    paper: '#ffffff',
    paperSoft: '#f3f3ef',
    lime: '#c8f000',
    limeDark: '#9db800',
    muted: '#a6a6a6',
    line: 'rgba(255,255,255,.18)',
  },
  fonts: {
    body: "'Poppins', Arial, sans-serif",
  },
  radius: {
    sm: '8px',
    md: '18px',
    lg: '30px',
    pill: '999px',
  },
  shadow: {
    card: '0 22px 70px rgba(0,0,0,.16)',
  },
  layout: {
    max: '1200px',
    section: 'clamp(72px, 9vw, 132px)',
  },
}

export const cssVariables = Object.entries({
  '--ink': theme.colors.ink,
  '--ink-soft': theme.colors.inkSoft,
  '--paper': theme.colors.paper,
  '--paper-soft': theme.colors.paperSoft,
  '--lime': theme.colors.lime,
  '--lime-dark': theme.colors.limeDark,
  '--muted': theme.colors.muted,
  '--line': theme.colors.line,
  '--font-body': theme.fonts.body,
  '--radius-sm': theme.radius.sm,
  '--radius-md': theme.radius.md,
  '--radius-lg': theme.radius.lg,
  '--radius-pill': theme.radius.pill,
  '--shadow-card': theme.shadow.card,
  '--layout-max': theme.layout.max,
  '--section-space': theme.layout.section,
}).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

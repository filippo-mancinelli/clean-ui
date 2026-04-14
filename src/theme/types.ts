/**
 * CSS Variable names for theming
 */
export const cssVars = {
  bg: '--bg',
  surface: '--surface',
  border: '--border',
  text: '--text',
  muted: '--muted',
  accent: '--accent',
  accentHover: '--accent-hover',
  codeBg: '--code-bg',
  danger: '--danger',
  success: '--success',
  warning: '--warning',
} as const

export type CSSVar = keyof typeof cssVars

/**
 * Default light theme values
 */
export const defaultTheme = {
  [cssVars.bg]: '#ffffff',
  [cssVars.surface]: '#f8f8f8',
  [cssVars.border]: '#cccccc',
  [cssVars.text]: '#222222',
  [cssVars.muted]: '#666666',
  [cssVars.accent]: '#2980b9',
  [cssVars.accentHover]: '#1f6391',
  [cssVars.codeBg]: '#f5f5f5',
  [cssVars.danger]: '#c0392b',
  [cssVars.success]: '#27ae60',
  [cssVars.warning]: '#e67e22',
} as const

/**
 * Dark theme values
 */
export const darkTheme = {
  [cssVars.bg]: '#1a1a1a',
  [cssVars.surface]: '#242424',
  [cssVars.border]: '#404040',
  [cssVars.text]: '#e0e0e0',
  [cssVars.muted]: '#999999',
  [cssVars.accent]: '#5dade2',
  [cssVars.accentHover]: '#3498db',
  [cssVars.codeBg]: '#2d2d2d',
  [cssVars.danger]: '#e74c3c',
  [cssVars.success]: '#2ecc71',
  [cssVars.warning]: '#f39c12',
} as const

/**
 * Apply theme to root element
 */
export function applyTheme(theme: Record<string, string>) {
  const root = document.documentElement
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
}

/**
 * Get CSS variable value
 */
export function getCSSVar(varName: CSSVar): string {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVars[varName]).trim()
}

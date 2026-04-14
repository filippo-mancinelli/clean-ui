# Theming

Clean UI uses CSS variables for easy theming and customization.

## CSS Variables

All theme values are exposed as CSS custom properties:

```css
:root {
  --bg: #ffffff;
  --surface: #f8f8f8;
  --border: #cccccc;
  --text: #222222;
  --muted: #666666;
  --accent: #2980b9;
  --accent-hover: #1f6391;
  --code-bg: #f5f5f5;
  --danger: #c0392b;
  --success: #27ae60;
  --warning: #e67e22;
}
```

## Custom Colors

Override specific CSS variables to create custom themes:

```css
:root {
  --accent: #8b5cf6; /* Purple accent */
  --accent-hover: #7c3aed;
}
```

## Dark Mode

Implement dark mode by conditionally applying CSS variables:

```tsx
import { applyTheme, darkTheme, defaultTheme } from '@clean-ui/core/theme'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    applyTheme(isDark ? darkTheme : defaultTheme)
  }, [isDark])

  return (
    <button onClick={() => setIsDark(!isDark)}>
      Toggle {isDark ? 'Light' : 'Dark'} Mode
    </button>
  )
}
```

Or use CSS with a data attribute:

```css
[data-theme="dark"] {
  --bg: #1a1a1a;
  --surface: #242424;
  --border: #404040;
  --text: #e0e0e0;
  --muted: #999999;
  --accent: #5dade2;
  --accent-hover: #3498db;
  --code-bg: #2d2d2d;
}
```

```tsx
document.documentElement.setAttribute('data-theme', 'dark')
```

## TypeScript Helper

Use the TypeScript helper for type-safe theme updates:

```tsx
import { applyTheme, defaultTheme, darkTheme } from '@clean-ui/core/theme'

// Apply default theme
applyTheme(defaultTheme)

// Apply dark theme
applyTheme(darkTheme)

// Custom theme
applyTheme({
  '--bg': '#0f172a',
  '--surface': '#1e293b',
  '--text': '#f1f5f9',
  '--accent': '#3b82f6',
})
```

## Theme Presets

### Light Theme (Default)

```tsx
import { defaultTheme } from '@clean-ui/core/theme'
```

- Clean, minimal interface
- High contrast for readability
- Optimized for daylight viewing

### Dark Theme

```tsx
import { darkTheme } from '@clean-ui/core/theme'
```

- Reduced eye strain in low light
- Optimized contrast for dark backgrounds
- Muted accent colors for comfort

## Custom Theme Example

Create a custom theme with your brand colors:

```tsx
import { applyTheme } from '@clean-ui/core/theme'

const brandTheme = {
  '--bg': '#ffffff',
  '--surface': '#fafafa',
  '--border': '#e0e0e0',
  '--text': '#1a1a1a',
  '--muted': '#757575',
  '--accent': '#6366f1', // Indigo
  '--accent-hover': '#4f46e5',
  '--code-bg': '#f3f4f6',
  '--danger': '#ef4444',
  '--success': '#10b981',
  '--warning': '#f59e0b',
}

applyTheme(brandTheme)
```

## Dynamic Theme Switching

Combine with CSS transitions for smooth theme changes:

```css
* {
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
```

Then toggle themes:

```tsx
const toggleTheme = () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark')
}
```

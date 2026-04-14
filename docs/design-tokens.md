# Design Tokens

Clean UI uses a systematic set of design tokens for consistency.

## Colors

### Primary Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#2980b9` | Primary actions, links |
| `--accent-hover` | `#1f6391` | Hover states |

### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--danger` | `#c0392b` | Destructive actions, errors |
| `--success` | `#27ae60` | Success states, confirmations |
| `--warning` | `#e67e22` | Warnings, caution |

### Neutral Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#ffffff` | Background, canvas |
| `--surface` | `#f8f8f8` | Cards, panels |
| `--border` | `#cccccc` | Borders, dividers |
| `--text` | `#222222` | Primary text |
| `--muted` | `#666666` | Secondary text |
| `--code-bg` | `#f5f5f5` | Code blocks |

## Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| Sans | `Geist Variable, Geist, Inter` | UI text |
| Mono | `Geist Mono Variable, Geist Mono, JetBrains Mono` | Code |

### Font Sizes

| Size | Value | Line Height | Usage |
|------|-------|-------------|-------|
| `xs` | `0.75rem` (12px) | 1.5 | Small text |
| `sm` | `0.875rem` (14px) | 1.6 | Body text |
| `base` | `1rem` (16px) | 1.7 | Base text |
| `lg` | `1.125rem` (18px) | 1.6 | Large text |
| `xl` | `1.25rem` (20px) | 1.4 | Headers |
| `2xl` | `1.5rem` (24px) | 1.3 | Large headers |
| `3xl` | `2rem` (32px) | 1.2 | Page titles |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Normal | `400` | Body text |
| Medium | `500` | Emphasis |
| Semibold | `600` | Headers |

### Letter Spacing

| Element | Value |
|---------|-------|
| H1 | `-0.02em` |
| H2 | `-0.01em` |
| TH | `0.05em` |

## Spacing

### Border Radius

| Size | Value | Usage |
|------|-------|-------|
| All | `2px` | Consistent minimal radius |

### Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--max-content` | `860px` | Content width limit |

## Shadows

Clean UI uses minimal shadows for depth:

| Component | Shadow |
|-----------|--------|
| Dialog | `box-shadow: none` (border only) |
| Select dropdown | `box-shadow: 0 1px 3px rgba(0,0,0,0.1)` |

## Transitions

| Property | Duration | Easing |
|----------|----------|--------|
| Colors | `100ms` | `ease` |
| Default | `200ms` | `ease` |

## Z-Index Scale

| Layer | Value | Usage |
|-------|-------|-------|
| Base | `0` | Normal content |
| Dropdown | `50` | Select, menu |
| Dialog overlay | `40` | Modal backdrop |
| Dialog content | `50` | Modal content |

## Breakpoints

While Clean UI doesn't prescribe specific breakpoints, common patterns include:

| Name | Min Width |
|------|-----------|
| Mobile | `0px` |
| Tablet | `640px` |
| Desktop | `1024px` |
| Wide | `1280px` |

## Using Tokens in Components

```tsx
// Direct CSS variable reference
<div style={{ color: 'var(--accent)' }}>Accent text</div>

// Tailwind class (recommended)
<div className="text-accent">Accent text</div>

// With custom value
<div style={{ '--accent': '#6366f1' } as React.CSSProperties}>
  <div className="text-accent">Custom accent</div>
</div>
```

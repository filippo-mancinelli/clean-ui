# Clean UI Documentation

Welcome to Clean UI - a modern, minimal UI library with beautiful Geist typography and a refined design system.

```{toctree}
:maxdepth: 2
:hidden:

getting-started
showroom
components
theming
design-tokens
examples
```

## Features

- **Modern Design System**: Clean, minimal aesthetic with 2px borders and refined typography
- **Geist Typography**: Beautiful variable font family for both UI and code
- **Radix UI Primitives**: Accessible, unstyled components with full keyboard navigation
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **TypeScript**: Full type safety and excellent developer experience
- **Theming**: CSS variables for easy customization and dark mode support

## Quick Start

```bash
npm install @clean-ui/core
```

```tsx
import { Button, Input, Badge } from '@clean-ui/core'
import '@clean-ui/core/styles'

function App() {
  return (
    <div className="p-6 space-y-4">
      <Button variant="primary">Click me</Button>
      <Input label="Email" placeholder="you@example.com" />
      <Badge variant="success">Active</Badge>
    </div>
  )
}
```

## Component Overview

Clean UI provides the following components:

- **Button** - Primary, secondary, ghost, and danger variants
- **Input** - Text inputs and textareas with labels and error states
- **Badge** - Status badges with multiple color variants
- **Table** - Clean, minimal table components
- **Dialog** - Modal dialogs with Radix UI primitives
- **Tabs** - Tabbed content with smooth transitions
- **Select** - Dropdown selects with search and keyboard support
- **Tooltip** - Simple tooltips with positioning options

## Design Philosophy

Clean UI follows these principles:

1. **Minimalism**: Clean, uncluttered interface with purposeful design choices
2. **Accessibility**: Built on Radix UI primitives for full keyboard and screen reader support
3. **Consistency**: Uniform spacing, typography, and color throughout
4. **Customization**: CSS variables make theming straightforward
5. **Performance**: Tree-shakeable exports and minimal runtime overhead

## Links

- [GitHub Repository](https://github.com/your-org/clean-ui)
- [npm Package](https://www.npmjs.com/package/@clean-ui/core)
- [Report Issues](https://github.com/your-org/clean-ui/issues)

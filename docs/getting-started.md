# Getting Started

## Installation

Install the package using npm, yarn, or pnpm:

```bash
npm install @clean-ui/core
```

```bash
yarn add @clean-ui/core
```

```bash
pnpm add @clean-ui/core
```

## Peer Dependencies

Clean UI requires React 18+:

```bash
npm install react@^18.0.0 react-dom@^18.0.0
```

## Basic Usage

### Import Styles

First, import the core stylesheet:

```tsx
import '@clean-ui/core/styles'
```

### Import Components

Then import and use the components:

```tsx
import { Button, Input, Badge } from '@clean-ui/core'

function MyComponent() {
  return (
    <div className="p-4">
      <Button variant="primary">Click me</Button>
      <Input label="Name" placeholder="Enter your name" />
      <Badge variant="success">Active</Badge>
    </div>
  )
}
```

## Tree Shaking

Clean UI supports tree shaking. Import only what you need:

```tsx
// Instead of this
import { Button, Input, Badge } from '@clean-ui/core'

// You can do this for smaller bundles
import { Button } from '@clean-ui/core/components/Button'
import { Input } from '@clean-ui/core/components/Input'
import { Badge } from '@clean-ui/core/components/Badge'
```

## TypeScript

Clean UI is written in TypeScript and includes full type definitions:

```tsx
import type { ButtonProps, InputProps, BadgeProps } from '@clean-ui/core'

const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'lg',
  children: 'Click me',
  onClick: () => console.log('clicked'),
}
```

## Next Steps

- Explore [Components](components.md) for detailed usage
- Learn about [Theming](theming.md) for customization
- See [Design Tokens](design-tokens.md) for reference
- Check [Examples](examples.md) for inspiration

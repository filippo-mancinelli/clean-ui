# @clean-ui/core

Minimal UI library. React + TypeScript + Tailwind + Radix UI.

```
npm install @clean-ui/core
```

```tsx
import { Button, Input, Badge } from '@clean-ui/core'
import '@clean-ui/core/styles'

<Button variant="primary">Click</Button>
<Input label="Email" placeholder="you@example.com" />
<Badge variant="success">Active</Badge>
```

## Components

Button, Input, Textarea, Badge, Table, Dialog, Tabs, Select, Tooltip

## Theming

Override CSS variables or use the helper:

```tsx
import { applyTheme, darkTheme } from '@clean-ui/core/theme'
applyTheme(darkTheme)
```

## Development

```bash
npm install
npm run dev    # Demo (localhost:5174)
npm run build  # Library
cd docs && pip install -r requirements.txt && python -m sphinx -b html . _build  # Docs
```

MIT

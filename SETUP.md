# Clean UI - Quick Setup Guide

## 🚀 Installation & Usage

### 1. Install Dependencies
```bash
cd ../clean-ui
npm install
```

### 2. Build Library
```bash
npm run build
```

### 3. Run Demo
```bash
npm run dev
```
Open http://localhost:5173

### 4. Build Documentation
```bash
cd docs
pip install -r requirements.txt
make html
# View docs/_build/html/index.html
```

## 📦 Publishing

```bash
npm run build
npm publish
```

## 🧪 Testing Components

All components are fully typed with TypeScript. Refer to the demo app for usage examples.

## 🎨 Theming

Override CSS variables in your app:

```css
:root {
  --accent: #your-color;
}
```

Or use the helper:
```tsx
import { applyTheme } from '@clean-ui/core/theme'
applyTheme({ '--accent': '#6366f1' })
```

## 📚 Documentation Structure

- `index.md` - Overview & quick start
- `getting-started.md` - Installation guide
- `components.md` - Component API reference
- `theming.md` - Theme customization
- `design-tokens.md` - Design system reference
- `examples.md` - Code examples

# Component Showroom

Live examples of all Clean UI components with color customization.

## Theming

All components use CSS variables for easy color customization:

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

Or use the helper:

```tsx
import { applyTheme } from '@clean-ui/core/theme'

// Custom colors
applyTheme({
  '--bg': '#0f172a',
  '--surface': '#1e293b',
  '--text': '#f1f5f9',
  '--accent': '#6366f1',
})
```

## Button

### Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
```

**Preview:**
<div class="component-preview">
  <button style="padding: 6px 16px; background: var(--accent, #2980b9); color: white; border: 1px solid var(--accent, #2980b9); border-radius: 2px; font-size: 14px; font-weight: 500; cursor: pointer; font-family: system-ui, sans-serif;">Primary</button>
  <button style="padding: 6px 16px; background: var(--bg, #ffffff); color: var(--text, #222); border: 1px solid var(--border, #ccc); border-radius: 2px; font-size: 14px; font-weight: 500; cursor: pointer; font-family: system-ui, sans-serif;">Secondary</button>
  <button style="padding: 6px 16px; background: transparent; color: var(--muted, #666); border: 1px solid transparent; border-radius: 2px; font-size: 14px; font-weight: 500; cursor: pointer; font-family: system-ui, sans-serif;">Ghost</button>
  <button style="padding: 6px 16px; background: var(--bg, #ffffff); color: var(--danger, #c0392b); border: 1px solid var(--danger, #c0392b); border-radius: 2px; font-size: 14px; font-weight: 500; cursor: pointer; font-family: system-ui, sans-serif;">Danger</button>
</div>

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

**Preview:**
<div class="component-preview">
  <button style="padding: 4px 10px; background: var(--accent, #2980b9); color: white; border: 1px solid var(--accent, #2980b9); border-radius: 2px; font-size: 14px; font-weight: 500; cursor: pointer; font-family: system-ui, sans-serif;">Small</button>
  <button style="padding: 6px 16px; background: var(--accent, #2980b9); color: white; border: 1px solid var(--accent, #2980b9); border-radius: 2px; font-size: 14px; font-weight: 500; cursor: pointer; font-family: system-ui, sans-serif;">Medium</button>
  <button style="padding: 8px 20px; background: var(--accent, #2980b9); color: white; border: 1px solid var(--accent, #2980b9); border-radius: 2px; font-size: 16px; font-weight: 500; cursor: pointer; font-family: system-ui, sans-serif;">Large</button>
</div>

### States

```tsx
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
```

**Preview:**
<div class="component-preview">
  <button disabled style="padding: 6px 16px; background: var(--accent, #2980b9); color: white; border: 1px solid var(--accent, #2980b9); border-radius: 2px; font-size: 14px; font-weight: 500; cursor: pointer; font-family: system-ui, sans-serif;">Loading</button>
  <button disabled style="padding: 6px 16px; background: var(--bg, #ffffff); color: var(--text, #222); border: 1px solid var(--border, #ccc); border-radius: 2px; font-size: 14px; font-weight: 500; cursor: not-allowed; opacity: 0.5; font-family: system-ui, sans-serif;">Disabled</button>
</div>

## Badge

### All Variants

```tsx
<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="accent">Accent</Badge>
<Badge variant="muted">Muted</Badge>
```

**Preview:**
<div class="component-preview">
  <span style="padding: 4px 6px; font-size: 12px; font-weight: 500; border: 1px solid var(--border, #ccc); border-radius: 2px; background: var(--surface, #f8f8f8); color: var(--text, #222); font-family: system-ui, sans-serif;">Default</span>
  <span style="padding: 4px 6px; font-size: 12px; font-weight: 500; border: 1px solid #a9dfbf; border-radius: 2px; background: #eafaf1; color: #1a7a45; font-family: system-ui, sans-serif;">Success</span>
  <span style="padding: 4px 6px; font-size: 12px; font-weight: 500; border: 1px solid #f9e4b7; border-radius: 2px; background: #fef9e7; color: #9a6108; font-family: system-ui, sans-serif;">Warning</span>
  <span style="padding: 4px 6px; font-size: 12px; font-weight: 500; border: 1px solid #fca5a5; border-radius: 2px; background: #fef2f2; color: var(--danger, #c0392b); font-family: system-ui, sans-serif;">Danger</span>
  <span style="padding: 4px 6px; font-size: 12px; font-weight: 500; border: 1px solid #aed6f1; border-radius: 2px; background: #eaf4fb; color: var(--accent, #2980b9); font-family: system-ui, sans-serif;">Accent</span>
  <span style="padding: 4px 6px; font-size: 12px; font-weight: 500; border: 1px solid var(--border, #ccc); border-radius: 2px; background: var(--surface, #f8f8f8); color: var(--muted, #666); font-family: system-ui, sans-serif;">Muted</span>
</div>

## Input

### Basic

```tsx
<Input label="Email" placeholder="you@example.com" />
```

**Preview:**
<div class="component-preview">
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <label style="font-size: 14px; font-weight: 500; color: var(--text, #222); font-family: system-ui, sans-serif;">Email</label>
    <input type="text" placeholder="you@example.com" style="width: 100%; padding: 6px 12px; font-size: 14px; border: 1px solid var(--border, #ccc); border-radius: 2px; background: var(--bg, #ffffff); color: var(--text, #222); font-family: system-ui, sans-serif;" />
  </div>
</div>

### With Error

```tsx
<Input label="Email" error="Invalid email format" />
```

**Preview:**
<div class="component-preview">
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <label style="font-size: 14px; font-weight: 500; color: var(--text, #222); font-family: system-ui, sans-serif;">Email</label>
    <input type="text" style="width: 100%; padding: 6px 12px; font-size: 14px; border: 1px solid var(--danger, #c0392b); border-radius: 2px; background: var(--bg, #ffffff); color: var(--text, #222); font-family: system-ui, sans-serif;" />
    <span style="font-size: 12px; color: var(--danger, #c0392b); font-family: system-ui, sans-serif;">Invalid email format</span>
  </div>
</div>

### With Hint

```tsx
<Input label="Password" type="password" hint="Must be at least 8 characters" />
```

**Preview:**
<div class="component-preview">
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <label style="font-size: 14px; font-weight: 500; color: var(--text, #222); font-family: system-ui, sans-serif;">Password</label>
    <input type="password" placeholder="••••••••" style="width: 100%; padding: 6px 12px; font-size: 14px; border: 1px solid var(--border, #ccc); border-radius: 2px; background: var(--bg, #ffffff); color: var(--text, #222); font-family: system-ui, sans-serif;" />
    <span style="font-size: 12px; color: var(--muted, #666); font-family: system-ui, sans-serif;">Must be at least 8 characters</span>
  </div>
</div>

### Textarea

```tsx
<Textarea label="Message" placeholder="Your message..." rows={4} />
```

**Preview:**
<div class="component-preview">
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <label style="font-size: 14px; font-weight: 500; color: var(--text, #222); font-family: system-ui, sans-serif;">Message</label>
    <textarea placeholder="Your message..." rows="4" style="width: 100%; padding: 6px 12px; font-size: 14px; border: 1px solid var(--border, #ccc); border-radius: 2px; background: var(--bg, #ffffff); color: var(--text, #222); font-family: system-ui, sans-serif; min-height: 80px; resize-y: vertical;"></textarea>
  </div>
</div>

## Table

### Basic Table

```tsx
<Table>
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Email</Th>
      <Th>Status</Th>
      <Th>Role</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>John Doe</Td>
      <Td>john@example.com</Td>
      <Td><Badge variant="success">Active</Badge></Td>
      <td>Admin</td>
    </Tr>
    <Tr>
      <Td>Jane Smith</Td>
      <Td>jane@example.com</Td>
      <Td><Badge variant="warning">Pending</Badge></Td>
      <td>User</td>
    </Tr>
    <Tr>
      <Td>Bob Johnson</Td>
      <Td>bob@example.com</Td>
      <Td><Badge variant="muted">Inactive</Badge></Td>
      <td>User</td>
    </Tr>
  </Tbody>
</Table>
```

**Preview:**
<div class="component-preview">
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr>
        <th style="text-align: left; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted, #666); border-bottom: 2px solid var(--border, #ccc); padding: 8px 12px; font-family: system-ui, sans-serif;">Name</th>
        <th style="text-align: left; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted, #666); border-bottom: 2px solid var(--border, #ccc); padding: 8px 12px; font-family: system-ui, sans-serif;">Email</th>
        <th style="text-align: left; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted, #666); border-bottom: 2px solid var(--border, #ccc); padding: 8px 12px; font-family: system-ui, sans-serif;">Status</th>
        <th style="text-align: left; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted, #666); border-bottom: 2px solid var(--border, #ccc); padding: 8px 12px; font-family: system-ui, sans-serif;">Role</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--border, #ccc);">
        <td style="padding: 10px 12px; vertical-align: top; font-family: system-ui, sans-serif;">John Doe</td>
        <td style="padding: 10px 12px; vertical-align: top; font-family: system-ui, sans-serif;">john@example.com</td>
        <td style="padding: 10px 12px; vertical-align: top;">
          <span style="padding: 4px 6px; font-size: 12px; font-weight: 500; border: 1px solid #a9dfbf; border-radius: 2px; background: #eafaf1; color: #1a7a45; font-family: system-ui, sans-serif;">Active</span>
        </td>
        <td style="padding: 10px 12px; vertical-align: top; font-family: system-ui, sans-serif;">Admin</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border, #ccc);">
        <td style="padding: 10px 12px; vertical-align: top; font-family: system-ui, sans-serif;">Jane Smith</td>
        <td style="padding: 10px 12px; vertical-align: top; font-family: system-ui, sans-serif;">jane@example.com</td>
        <td style="padding: 10px 12px; vertical-align: top;">
          <span style="padding: 4px 6px; font-size: 12px; font-weight: 500; border: 1px solid #f9e4b7; border-radius: 2px; background: #fef9e7; color: #9a6108; font-family: system-ui, sans-serif;">Pending</span>
        </td>
        <td style="padding: 10px 12px; vertical-align: top; font-family: system-ui, sans-serif;">User</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; vertical-align: top; font-family: system-ui, sans-serif;">Bob Johnson</td>
        <td style="padding: 10px 12px; vertical-align: top; font-family: system-ui, sans-serif;">bob@example.com</td>
        <td style="padding: 10px 12px; vertical-align: top;">
          <span style="padding: 4px 6px; font-size: 12px; font-weight: 500; border: 1px solid var(--border, #ccc); border-radius: 2px; background: var(--surface, #f8f8f8); color: var(--muted, #666); font-family: system-ui, sans-serif;">Inactive</span>
        </td>
        <td style="padding: 10px 12px; vertical-align: top; font-family: system-ui, sans-serif;">User</td>
      </tr>
    </tbody>
  </table>
</div>

## Dialog

```tsx
<Dialog
  open={open}
  onOpenChange={setOpen}
  title="Confirm Deletion"
  description="This action cannot be undone"
>
  <p>Are you sure you want to delete this item?</p>
  <DialogFooter>
    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
  </DialogFooter>
</Dialog>
```

## Tabs

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Settings</TabsTrigger>
    <TabsTrigger value="tab3">Logs</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Overview content
  </TabsContent>
  <TabsContent value="tab2">
    Settings content
  </TabsContent>
  <TabsContent value="tab3">
    Logs content
  </TabsContent>
</Tabs>
```

## Select

```tsx
<Select
  label="Choose your plan"
  options={[
    { value: 'free', label: 'Free Plan' },
    { value: 'pro', label: 'Pro Plan - $9/mo' },
    { value: 'enterprise', label: 'Enterprise - $49/mo' },
  ]}
  placeholder="Select a plan"
  onValueChange={(value) => console.log(value)}
/>
```

## Color Customization Examples

### Purple Theme

```tsx
applyTheme({
  '--accent': '#6366f1',
  '--accent-hover': '#4f46e5',
  '--bg': '#fafafa',
  '--surface': '#f5f5f5',
})
```

**Preview with purple accent:**
<div class="component-preview" style="--accent: #6366f1; --accent-hover: #4f46e5;">
  <button style="padding: 6px 16px; background: #6366f1; color: white; border: 1px solid #6366f1; border-radius: 2px; font-size: 14px; font-weight: 500; cursor: pointer; font-family: system-ui, sans-serif;">Purple Button</button>
</div>

### Dark Theme

```tsx
import { darkTheme } from '@clean-ui/core/theme'
applyTheme(darkTheme)
```

## Interactive Demo

For live, interactive examples with real React components:

```bash
cd ../clean-ui
npm run dev
# Open http://localhost:5174
```

The demo app includes:
- ✅ All components rendered live
- ✅ Interactive state changes
- ✅ Copy-paste ready code
- ✅ Real component behavior

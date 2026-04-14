# Components

## Button

Buttons allow users to perform actions within your application.

```tsx
import { Button } from '@clean-ui/core'
```

### Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Loading State

```tsx
<Button loading>Loading...</Button>
```

### Disabled

```tsx
<Button disabled>Disabled</Button>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'secondary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |
| `className` | `string` | `''` | Additional CSS classes |

## Input

Text inputs for user data entry.

```tsx
import { Input } from '@clean-ui/core'
```

### Basic Usage

```tsx
<Input label="Email" placeholder="you@example.com" />
```

### With Error

```tsx
<Input
  label="Email"
  error="Please enter a valid email"
  placeholder="you@example.com"
/>
```

### With Hint

```tsx
<Input
  label="Password"
  type="password"
  hint="Must be at least 8 characters"
/>
```

### Textarea

```tsx
import { Textarea } from '@clean-ui/core'

<Textarea
  label="Message"
  placeholder="Enter your message"
  rows={4}
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label |
| `error` | `string` | - | Error message |
| `hint` | `string` | - | Helper text |
| `id` | `string` | - | Input ID |
| `disabled` | `boolean` | `false` | Disable input |
| `className` | `string` | `''` | Additional CSS classes |

## Badge

Badges display status or categorical information.

```tsx
import { Badge } from '@clean-ui/core'
```

### Variants

```tsx
<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="accent">Accent</Badge>
<Badge variant="muted">Muted</Badge>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'accent' \| 'muted'` | `'default'` | Badge style variant |
| `className` | `string` | `''` | Additional CSS classes |

## Table

Tables display structured data.

```tsx
import { Table, Thead, Tbody, Tr, Th, Td } from '@clean-ui/core'
```

### Basic Usage

```tsx
<Table>
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Email</Th>
      <Th>Status</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>John Doe</Td>
      <Td>john@example.com</Td>
      <Td><Badge variant="success">Active</Badge></Td>
    </Tr>
  </Tbody>
</Table>
```

## Dialog

Modal dialogs for focused interactions.

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@clean-ui/core'
```

### Basic Usage

```tsx
function MyDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen} title="Confirm Action">
      <DialogContent>
        <p>Are you sure you want to proceed?</p>
      </DialogContent>
    </Dialog>
  )
}
```

## Tabs

Tabbed content organization.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@clean-ui/core'
```

### Basic Usage

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Content 1
  </TabsContent>
  <TabsContent value="tab2">
    Content 2
  </TabsContent>
</Tabs>
```

## Select

Dropdown selection component.

```tsx
import { Select } from '@clean-ui/core'
```

### Basic Usage

```tsx
<Select
  label="Choose option"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  placeholder="Select..."
  onValueChange={(value) => console.log(value)}
/>
```

## Tooltip

Simple tooltips for additional context.

```tsx
import { Tooltip } from '@clean-ui/core'
```

### Basic Usage

```tsx
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>
```

# Examples

## Form Example

```tsx
import { Button, Input, Textarea, Select } from '@clean-ui/core'
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Your name"
      />

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="you@example.com"
      />

      <Select
        label="Topic"
        options={[
          { value: 'general', label: 'General Inquiry' },
          { value: 'support', label: 'Technical Support' },
          { value: 'feedback', label: 'Feedback' },
        ]}
        value={formData.topic}
        onValueChange={(value) => setFormData({ ...formData, topic: value })}
        placeholder="Select a topic"
      />

      <Textarea
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="How can we help?"
        rows={5}
      />

      <Button type="submit" variant="primary" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
```

## Data Table Example

```tsx
import { Table, Thead, Tbody, Tr, Th, Td, Badge } from '@clean-ui/core'

interface User {
  id: number
  name: string
  email: string
  status: 'active' | 'inactive' | 'pending'
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'pending' },
]

const statusVariants = {
  active: 'success' as const,
  inactive: 'muted' as const,
  pending: 'warning' as const,
}

function UsersTable() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>
              <Badge variant={statusVariants[user.status]}>
                {user.status}
              </Badge>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
```

## Dialog Example

```tsx
import { Dialog, DialogFooter, Button } from '@clean-ui/core'
import { useState } from 'react'

function ConfirmDialog() {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    console.log('Confirmed!')
    setOpen(false)
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete Item</Button>

      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Confirm Deletion"
        description="This action cannot be undone."
      >
        <p className="text-sm text-muted">
          Are you sure you want to delete this item? This will permanently remove it from your account.
        </p>

        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Delete
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
```

## Tabs Example

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@clean-ui/core'

function SettingsTabs() {
  return (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
        <p>Update your profile information and preferences.</p>
      </TabsContent>

      <TabsContent value="account">
        <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
        <p>Manage your account security and login options.</p>
      </TabsContent>

      <TabsContent value="notifications">
        <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
        <p>Choose how you want to be notified.</p>
      </TabsContent>
    </Tabs>
  )
}
```

## Button Group Example

```tsx
import { Button } from '@clean-ui/core'

function ButtonGroup() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Save Changes</Button>
      <Button variant="ghost">Help</Button>
    </div>
  )
}
```

## Status Badges Example

```tsx
import { Badge } from '@clean-ui/core'

function StatusBadges() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="success">Online</Badge>
      <Badge variant="warning">Away</Badge>
      <Badge variant="danger">Offline</Badge>
      <Badge variant="accent">New</Badge>
      <Badge variant="muted">Archived</Badge>
    </div>
  )
}
```

## Complete Dashboard Example

```tsx
import { Button, Input, Badge, Table, Thead, Tbody, Tr, Th, Td, Tabs, TabsList, TabsTrigger, TabsContent } from '@clean-ui/core'

function Dashboard() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="bg-bg border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Badge variant="success">Connected</Badge>
            <Button variant="ghost" size="sm">Settings</Button>
          </div>
        </div>
      </header>

      <main className="p-6">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-bg p-4 border border-border rounded">
                  <div className="text-sm text-muted mb-1">Total Users</div>
                  <div className="text-2xl font-semibold">1,234</div>
                </div>
                <div className="bg-bg p-4 border border-border rounded">
                  <div className="text-sm text-muted mb-1">Revenue</div>
                  <div className="text-2xl font-semibold">$45,678</div>
                </div>
                <div className="bg-bg p-4 border border-border rounded">
                  <div className="text-sm text-muted mb-1">Conversion Rate</div>
                  <div className="text-2xl font-semibold">3.2%</div>
                </div>
              </div>

              <Table>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Status</Th>
                    <Th>Last Active</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>John Doe</Td>
                    <Td><Badge variant="success">Active</Badge></Td>
                    <td>2 minutes ago</td>
                  </Tr>
                  <Tr>
                    <Td>Jane Smith</Td>
                    <Td><Badge variant="warning">Pending</Badge></Td>
                    <Td>1 hour ago</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <h2 className="text-lg font-semibold mb-4">Analytics</h2>
            <p className="text-muted">Analytics data will appear here.</p>
          </TabsContent>

          <TabsContent value="settings">
            <h2 className="text-lg font-semibold mb-4">Settings</h2>
            <div className="space-y-4 max-w-md">
              <Input label="Display Name" placeholder="Your name" />
              <Input label="Email" type="email" placeholder="you@example.com" />
              <Button variant="primary">Save Changes</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
```

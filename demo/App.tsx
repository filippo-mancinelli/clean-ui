import { Button, Input, Textarea, Badge, Table, Thead, Tbody, Tr, Th, Td, Dialog, DialogFooter, Tabs, TabsList, TabsTrigger, TabsContent, Select, Tooltip } from '@clean-ui/core'
import { useState } from 'react'

function Demo() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const data = [
    { name: 'John Doe', email: 'john@example.com', status: 'active' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'pending' },
    { name: 'Bob Johnson', email: 'bob@example.com', status: 'active' },
  ]

  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-semibold mb-2">Clean UI Demo</h1>
          <p className="text-muted">Minimal UI library with Geist typography</p>
        </header>

        <section className="bg-bg border border-border p-6 space-y-4">
          <h2 className="text-xl font-semibold">Buttons</h2>
          <div className="flex items-center gap-3 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <section className="bg-bg border border-border p-6 space-y-4">
          <h2 className="text-xl font-semibold">Badges</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="muted">Muted</Badge>
          </div>
        </section>

        <section className="bg-bg border border-border p-6 space-y-4">
          <h2 className="text-xl font-semibold">Form Elements</h2>
          <div className="space-y-4 max-w-md">
            <Input
              label="Name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your name"
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              hint="We'll never share your email"
            />
            <Input
              label="With Error"
              error="This field is required"
              placeholder="Show error state"
            />
            <Textarea
              label="Message"
              placeholder="Enter your message"
              rows={4}
            />
            <Select
              label="Choose an option"
              options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' },
              ]}
              placeholder="Select..."
            />
          </div>
        </section>

        <section className="bg-bg border border-border p-6 space-y-4">
          <h2 className="text-xl font-semibold">Table</h2>
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((row, i) => (
                <Tr key={i}>
                  <Td>{row.name}</Td>
                  <Td>{row.email}</Td>
                  <Td>
                    <Badge variant={row.status === 'active' ? 'success' : 'warning'}>
                      {row.status}
                    </Badge>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </section>

        <section className="bg-bg border border-border p-6 space-y-4">
          <h2 className="text-xl font-semibold">Tabs</h2>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p className="text-muted">Content for tab 1</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p className="text-muted">Content for tab 2</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p className="text-muted">Content for tab 3</p>
            </TabsContent>
          </Tabs>
        </section>

        <section className="bg-bg border border-border p-6 space-y-4">
          <h2 className="text-xl font-semibold">Dialog & Tooltip</h2>
          <div className="flex items-center gap-3 flex-wrap">
            <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
            <Tooltip content="This is a tooltip">
              <Button variant="ghost">Hover me</Button>
            </Tooltip>
          </div>
        </section>

        <Dialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          title="Confirm Action"
          description="This action cannot be undone"
        >
          <p className="text-sm text-muted mb-4">
            Are you sure you want to proceed? This will permanently delete the selected item.
          </p>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setDialogOpen(false)}>
              Delete
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  )
}

export default Demo

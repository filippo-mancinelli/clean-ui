import * as RadixTabs from '@radix-ui/react-tabs'

export interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  className?: string
}

export function Tabs({ defaultValue, value, onValueChange, children, className = '' }: TabsProps) {
  return (
    <RadixTabs.Root defaultValue={defaultValue} value={value} onValueChange={onValueChange} className={className}>
      {children}
    </RadixTabs.Root>
  )
}

export function TabsList({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixTabs.List
      className={[
        'flex border-b border-border gap-0 mb-6',
        className,
      ].join(' ')}
    >
      {children}
    </RadixTabs.List>
  )
}

export interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  disabled?: boolean
  className?: string
}

export function TabsTrigger({ value, children, disabled, className = '' }: TabsTriggerProps) {
  return (
    <RadixTabs.Trigger
      value={value}
      disabled={disabled}
      className={[
        "px-4 py-2 text-sm font-medium text-muted border-b-2 border-transparent -mb-px transition-colors hover:text-text data-[state=active]:text-accent data-[state=active]:border-accent focus:outline-none",
        className
      ].join(' ')}
    >
      {children}
    </RadixTabs.Trigger>
  )
}

export interface TabsContentProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function TabsContent({ value, children, className = '' }: TabsContentProps) {
  return (
    <RadixTabs.Content value={value} className={className}>
      {children}
    </RadixTabs.Content>
  )
}

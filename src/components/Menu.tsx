import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export interface MenuItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  shortcut?: string
  disabled?: boolean
  onClick?: () => void
}

export interface MenuProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: 'start' | 'center' | 'end'
}

export function Menu({ trigger, children, align = 'start' }: MenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex items-center gap-2 text-sm text-text hover:bg-surface px-3 py-1.5 rounded transition-colors">
          {trigger}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          className="z-50 min-w-[180px] bg-bg border border-border shadow-md rounded p-1"
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export function MenuItem({ children, icon, shortcut, disabled = false, onClick }: MenuItemProps) {
  return (
    <DropdownMenu.Item
      disabled={disabled}
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 text-sm text-text rounded cursor-pointer hover:bg-surface focus:bg-surface focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="text-xs text-muted">{shortcut}</span>
      )}
    </DropdownMenu.Item>
  )
}

export function MenuSeparator() {
  return <DropdownMenu.Separator className="my-1 h-px bg-border" />
}

export { DropdownMenu }

import * as RadixSwitch from '@radix-ui/react-switch'

export interface SwitchProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  hint?: string
  id?: string
  className?: string
}

export function Switch({
  checked,
  onCheckedChange,
  disabled = false,
  required = false,
  label,
  hint,
  id,
  className = '',
}: SwitchProps) {
  const switchId = id || `switch-${Math.random().toString(36).slice(2, 11)}`

  return (
    <div className={['flex items-center gap-2', className].join(' ')}>
      <RadixSwitch.Root
        id={switchId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        required={required}
        className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-border bg-bg transition-colors duration-100 focus:outline-none focus:ring-1 focus:ring-accent focus:ring-offset-1 focus-visible:ring-2 focus-visible:ring-accent/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
      >
        <RadixSwitch.Thumb className="block h-4 w-4 rounded-full bg-text shadow-sm transition-transform duration-100 translate-x-0 data-[state=checked]:translate-x-4" />
      </RadixSwitch.Root>

      {(label || hint) && (
        <div className="flex flex-col">
          {label && (
            <label
              htmlFor={switchId}
              className="text-sm font-medium text-text peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
              {required && <span className="text-danger ml-0.5">*</span>}
            </label>
          )}
          {hint && (
            <span className="text-xs text-muted">{hint}</span>
          )}
        </div>
      )}
    </div>
  )
}

Switch.displayName = 'Switch'

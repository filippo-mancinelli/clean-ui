import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

export interface CheckboxProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  error?: string
  hint?: string
  id?: string
  className?: string
}

export function Checkbox({
  checked,
  onCheckedChange,
  disabled = false,
  required = false,
  label,
  error,
  hint,
  id,
  className = '',
}: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={['flex items-start gap-2', className].join(' ')}>
      <RadixCheckbox.Root
        id={checkboxId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        required={required}
        className="group relative flex h-4 w-4 appearance-none items-center justify-center rounded border border-border bg-bg text-text transition-colors duration-100 hover:border-accent focus:outline-none focus:ring-1 focus:ring-accent focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent data-[state=checked]:border-accent data-[state=checked]:text-white"
      >
        <RadixCheckbox.Indicator className="flex items-center justify-center">
          <Check className="h-3 w-3 text-white" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      {(label || error || hint) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <label
              htmlFor={checkboxId}
              className="text-sm font-medium text-text peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
              {required && <span className="text-danger ml-0.5">*</span>}
            </label>
          )}
          {hint && !error && (
            <span className="text-xs text-muted">{hint}</span>
          )}
          {error && (
            <span className="text-xs text-danger">{error}</span>
          )}
        </div>
      )}
    </div>
  )
}

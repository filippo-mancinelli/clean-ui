import * as RadixRadio from '@radix-ui/react-radio-group'

export interface RadioOption {
  value: string
  label: string
  disabled?: boolean
}

export interface RadioGroupProps {
  name?: string
  value?: string
  onValueChange?: (value: string) => void
  options: RadioOption[]
  label?: string
  error?: string
  hint?: string
  required?: boolean
  disabled?: boolean
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export function RadioGroup({
  name,
  value,
  onValueChange,
  options,
  label,
  error,
  hint,
  required = false,
  disabled = false,
  orientation = 'vertical',
  className = '',
}: RadioGroupProps) {
  return (
    <div className={['flex flex-col gap-1', className].join(' ')}>
      {label && (
        <label className="text-sm font-medium text-text">
          {label}
          {required && <span className="text-danger ml-0.5">*</span>}
        </label>
      )}

      <RadixRadio.Root
        name={name}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        required={required}
        orientation={orientation}
        className="gap-2"
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-2">
            <RadixRadio.Item
              value={option.value}
              disabled={option.disabled}
              id={`radio-${option.value}`}
              className="group relative flex h-4 w-4 appearance-none items-center justify-center rounded-full border-2 border-border bg-bg text-text transition-colors duration-100 hover:border-accent focus:outline-none focus:ring-1 focus:ring-accent focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-accent"
            >
              <RadixRadio.Indicator className="flex h-2 w-2 items-center justify-center rounded-full bg-accent" />
            </RadixRadio.Item>
            <label
              htmlFor={`radio-${option.value}`}
              className="text-sm text-text peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadixRadio.Root>

      {hint && !error && (
        <span className="text-xs text-muted">{hint}</span>
      )}
      {error && (
        <span className="text-xs text-danger">{error}</span>
      )}
    </div>
  )
}

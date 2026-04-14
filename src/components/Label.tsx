import { type LabelHTMLAttributes } from 'react'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

export function Label({ children, required, className = '', ...props }: LabelProps) {
  return (
    <label
      className={[
        'text-sm font-medium text-text peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
      {required && <span className="text-danger ml-0.5">*</span>}
    </label>
  )
}

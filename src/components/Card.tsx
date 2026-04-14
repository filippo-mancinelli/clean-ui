import { type HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated'
}

const variantStyles: Record<string, string> = {
  default: 'bg-bg',
  bordered: 'bg-bg border border-border',
  elevated: 'bg-bg border border-border shadow-md',
}

export function Card({ variant = 'default', className = '', children, ...props }: CardProps) {
  return (
    <div
      className={['rounded', variantStyles[variant], className].join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className = '', children, ...props }: CardHeaderProps) {
  return (
    <div className={['px-6 py-4 border-b border-border', className].join(' ')} {...props}>
      {children}
    </div>
  )
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className = '', children, ...props }: CardContentProps) {
  return (
    <div className={['p-6', className].join(' ')} {...props}>
      {children}
    </div>
  )
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className = '', children, ...props }: CardFooterProps) {
  return (
    <div className={['px-6 py-4 border-t border-border bg-surface', className].join(' ')} {...props}>
      {children}
    </div>
  )
}

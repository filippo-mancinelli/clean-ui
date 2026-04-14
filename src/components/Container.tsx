import { type HTMLAttributes } from 'react'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize
  centered?: boolean
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full',
}

export function Container({
  size = 'lg',
  centered = true,
  className = '',
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={[
        'w-full',
        sizeStyles[size],
        centered && 'mx-auto',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

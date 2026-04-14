import { type HTMLAttributes, useMemo } from 'react'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: AvatarSize
}

const sizeStyles: Record<AvatarSize, string> = {
  sm: 'h-6 w-6 text-xs',
  md: 'h-8 w-8 text-sm',
  lg: 'h-10 w-10 text-base',
  xl: 'h-12 w-12 text-lg',
}

export function Avatar({
  src,
  alt = '',
  fallback,
  size = 'md',
  className = '',
  ...props
}: AvatarProps) {
  const initials = useMemo(() => {
    if (fallback) return fallback
    if (alt) {
      return alt
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
    return '?'
  }, [alt, fallback])

  if (src) {
    return (
      <div className={['rounded-full overflow-hidden bg-surface', sizeStyles[size], className].join(' ')} {...props}>
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    )
  }

  return (
    <div
      className={[
        'rounded-full bg-accent text-white flex items-center justify-center font-medium',
        sizeStyles[size],
        className,
      ].join(' ')}
      {...props}
    >
      {initials}
    </div>
  )
}

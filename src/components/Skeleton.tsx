export type SkeletonVariant = 'default' | 'pulse'

export interface SkeletonProps {
  variant?: SkeletonVariant
  width?: string | number
  height?: string | number
  className?: string
}

export function Skeleton({
  variant = 'default',
  width,
  height,
  className = '',
}: SkeletonProps) {
  const baseClasses = 'bg-surface border border-border rounded animate-pulse'

  const variantClasses = variant === 'pulse'
    ? 'animate-pulse'
    : ''

  const style: React.CSSProperties = {}
  if (width) style.width = typeof width === 'number' ? `${width}px` : width
  if (height) style.height = typeof height === 'number' ? `${height}px` : height

  return (
    <div
      className={[baseClasses, variantClasses, className].join(' ')}
      style={Object.keys(style).length > 0 ? style : undefined}
    />
  )
}

export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={['space-y-2', className].join(' ')}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height={16}
          width={i === lines - 1 ? '75%' : '100%'}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={['border border-border rounded p-4 space-y-3', className].join(' ')}>
      <Skeleton width={120} height={20} />
      <SkeletonText lines={3} />
    </div>
  )
}

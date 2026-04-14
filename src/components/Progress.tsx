import * as RadixProgress from '@radix-ui/react-progress'

export interface ProgressProps {
  value?: number
  max?: number
  className?: string
}

export function Progress({ value = 0, max = 100, className = '' }: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div className={['w-full', className].join(' ')}>
      <RadixProgress.Root
        value={value}
        max={max}
        className="relative h-2 w-full overflow-hidden rounded-full bg-surface border border-border"
      >
        <RadixProgress.Indicator
          style={{ transform: `translateX(-${100 - percentage}%)` }}
          className="h-full w-full bg-accent transition-all duration-300 ease-in-out"
        />
      </RadixProgress.Root>
      <div className="flex justify-between text-xs text-muted mt-1">
        <span>Progress</span>
        <span>{Math.round(percentage)}%</span>
      </div>
    </div>
  )
}

export function ProgressIndeterminate({ className = '' }: { className?: string }) {
  return (
    <div className={['w-full', className].join(' ')}>
      <RadixProgress.Root
        className="relative h-2 w-full overflow-hidden rounded-full bg-surface border border-border"
      >
        <RadixProgress.Indicator className="h-full w-full bg-accent animate-pulse" />
      </RadixProgress.Root>
      <div className="text-xs text-muted mt-1">Loading...</div>
    </div>
  )
}

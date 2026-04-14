import * as Slider from '@radix-ui/react-slider'

export interface SliderProps {
  value?: number[]
  onValueChange?: (value: number[]) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  label?: string
  className?: string
}

export function RangeSlider({
  value = [50],
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label,
  className = '',
}: SliderProps) {
  return (
    <div className={['flex flex-col gap-2', className].join(' ')}>
      {label && (
        <label className="text-sm font-medium text-text">
          {label}
        </label>
      )}
      <Slider.Root
        value={value}
        onValueChange={onValueChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className="relative flex items-center w-full h-5"
      >
        <Slider.Track className="relative flex-1 h-2 bg-surface border border-border rounded-full overflow-hidden">
          <Slider.Range className="absolute h-full bg-accent" />
        </Slider.Track>
        {value.map((_, index) => (
          <Slider.Thumb
            key={index}
            className="block h-4 w-4 rounded-full bg-text shadow border-2 border-white hover:bg-accent hover:scale-110 focus:outline-none focus:ring-1 focus:ring-accent transition-all cursor-pointer"
          />
        ))}
      </Slider.Root>
      <div className="flex justify-between text-xs text-muted">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}

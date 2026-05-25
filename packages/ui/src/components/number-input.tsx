import * as React from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '../lib/utils'

interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'defaultValue'> {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
}

const NumberInput = React.forwardRef<HTMLDivElement, NumberInputProps>(
  ({ className, value = 0, onChange, min, max, step = 1, disabled, ...props }, ref) => {
    function clamp(v: number) {
      let n = v
      if (min !== undefined) n = Math.max(min, n)
      if (max !== undefined) n = Math.min(max, n)
      return n
    }

    function decrement() {
      if (!disabled) onChange?.(clamp(value - step))
    }

    function increment() {
      if (!disabled) onChange?.(clamp(value + step))
    }

    return (
      <div
        ref={ref}
        className={cn('flex h-10 w-fit items-center border-2 border-foreground', disabled && 'opacity-50', className)}
      >
        <button
          type="button"
          onClick={decrement}
          disabled={disabled || (min !== undefined && value <= min)}
          className="flex h-full w-9 items-center justify-center border-r-2 border-foreground hover:bg-accent disabled:cursor-not-allowed transition-colors"
          aria-label="Decrement"
        >
          <Minus className="h-3 w-3" />
        </button>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={(e) => onChange?.(clamp(Number(e.target.value)))}
          className="h-full w-16 bg-transparent text-center text-sm tabular-nums outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          {...props}
        />
        <button
          type="button"
          onClick={increment}
          disabled={disabled || (max !== undefined && value >= max)}
          className="flex h-full w-9 items-center justify-center border-l-2 border-foreground hover:bg-accent disabled:cursor-not-allowed transition-colors"
          aria-label="Increment"
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>
    )
  }
)
NumberInput.displayName = 'NumberInput'

export { NumberInput }

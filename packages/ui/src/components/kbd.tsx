import * as React from 'react'
import { cn } from '../lib/utils'

const Kbd = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center border-2 border-foreground bg-muted px-1.5 py-0.5 font-mono text-xs font-medium text-foreground',
        className
      )}
      {...props}
    />
  )
)
Kbd.displayName = 'Kbd'

export { Kbd }

import * as React from 'react'
import { cn } from '../lib/utils'

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col items-center justify-center gap-4 border-2 border-dashed border-foreground p-12 text-center',
        className
      )}
      {...props}
    >
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center border-2 border-foreground text-muted-foreground">
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-medium uppercase tracking-widest">{title}</p>
        {description && (
          <p className="text-xs text-muted-foreground max-w-[24rem]">{description}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
)
EmptyState.displayName = 'EmptyState'

export { EmptyState }

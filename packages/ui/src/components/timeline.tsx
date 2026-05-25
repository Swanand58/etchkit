import * as React from 'react'
import { cn } from '../lib/utils'

const Timeline = React.forwardRef<HTMLOListElement, React.HTMLAttributes<HTMLOListElement>>(
  ({ className, ...props }, ref) => (
    <ol ref={ref} className={cn('flex flex-col', className)} {...props} />
  )
)
Timeline.displayName = 'Timeline'

const TimelineItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn('relative flex gap-4 pb-8 last:pb-0', className)} {...props} />
  )
)
TimelineItem.displayName = 'TimelineItem'

const TimelineConnector = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col items-center', className)} {...props}>
      <div className="absolute top-3 left-[11px] bottom-0 w-[2px] bg-foreground last:hidden" />
    </div>
  )
)
TimelineConnector.displayName = 'TimelineConnector'

const TimelineDot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative z-10 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-foreground bg-background',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
TimelineDot.displayName = 'TimelineDot'

const TimelineContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-1 pt-0.5 pb-2', className)} {...props} />
  )
)
TimelineContent.displayName = 'TimelineContent'

const TimelineTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm font-medium uppercase tracking-widest', className)} {...props} />
  )
)
TimelineTitle.displayName = 'TimelineTitle'

const TimelineDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-xs text-muted-foreground', className)} {...props} />
  )
)
TimelineDescription.displayName = 'TimelineDescription'

const TimelineTime = React.forwardRef<HTMLTimeElement, React.HTMLAttributes<HTMLTimeElement>>(
  ({ className, ...props }, ref) => (
    <time ref={ref} className={cn('text-xs font-mono text-muted-foreground', className)} {...props} />
  )
)
TimelineTime.displayName = 'TimelineTime'

export { Timeline, TimelineItem, TimelineConnector, TimelineDot, TimelineContent, TimelineTitle, TimelineDescription, TimelineTime }

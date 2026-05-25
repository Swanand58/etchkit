import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { cn } from '../lib/utils'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3 border-2 border-foreground bg-background', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-4',
        month: 'flex flex-col gap-4',
        month_caption: 'flex justify-center pt-1 relative items-center w-full',
        caption_label: 'text-sm font-medium uppercase tracking-widest',
        nav: 'flex items-center justify-between absolute inset-x-0 top-1 px-1',
        button_previous: 'h-7 w-7 flex items-center justify-center border-2 border-foreground bg-background hover:bg-accent transition-colors',
        button_next: 'h-7 w-7 flex items-center justify-center border-2 border-foreground bg-background hover:bg-accent transition-colors',
        month_grid: 'w-full border-collapse',
        weekdays: 'flex',
        weekday: 'text-muted-foreground w-9 font-medium text-[0.7rem] uppercase tracking-widest text-center',
        week: 'flex w-full mt-1',
        day: 'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-foreground [&:has([data-outside])]:opacity-50',
        day_button: cn(
          'h-9 w-9 p-0 font-normal transition-colors hover:bg-accent hover:text-foreground aria-selected:opacity-100 border-0 bg-transparent cursor-pointer'
        ),
        selected: 'bg-foreground text-background hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background',
        today: 'border-2 border-foreground font-bold',
        outside: 'text-muted-foreground opacity-50',
        disabled: 'text-muted-foreground opacity-50',
        range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === 'left'
            ? <ChevronLeft className="h-4 w-4" />
            : <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}

export { Calendar }

import * as React from 'react'
import * as RechartsPrimitive from 'recharts'
import type { TooltipContentProps, LegendPayload } from 'recharts'
import { cn } from '../lib/utils'

const THEMES = { light: '', dark: '.dark' } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = { config: ChartConfig }

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) throw new Error('useChart must be used within <ChartContainer />')
  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { config: ChartConfig; children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children'] }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn('flex aspect-video justify-center text-xs', className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = 'ChartContainer'

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, cfg]) => cfg.theme || cfg.color)
  if (!colorConfig.length) return null
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) =>
            colorConfig
              .map(([key, itemConfig]) => {
                const color = itemConfig.theme?.[theme as keyof typeof THEMES] || itemConfig.color
                return color ? `${prefix} [data-chart=${id}] { --color-${key}: ${color}; }` : null
              })
              .join('\n')
          )
          .join('\n'),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

type ChartTooltipContentProps = Partial<TooltipContentProps> &
  React.ComponentProps<'div'> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: 'line' | 'dot' | 'dashed'
    nameKey?: string
    labelKey?: string
  }

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ active, payload, className, indicator = 'dot', hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey }, ref) => {
    const { config } = useChart()
    if (!active || !payload?.length) return null

    return (
      <div ref={ref} className={cn('border-2 border-foreground bg-background px-3 py-2 text-xs', className)}>
        {!hideLabel && (
          <p className={cn('font-medium uppercase tracking-widest mb-1.5', labelClassName)}>
            {labelFormatter ? labelFormatter(label, payload) : label}
          </p>
        )}
        <div className="flex flex-col gap-1">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || 'value'}`
            const itemConfig = config[key]
            return (
              <div key={index} className="flex items-center gap-2">
                {!hideIndicator && (
                  <div className="h-2 w-2 shrink-0" style={{ background: item.color || itemConfig?.color }} />
                )}
                <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                <span className="ml-auto font-mono font-medium tabular-nums">
                  {formatter ? formatter(item.value, item.name as string, item, index, payload) : item.value}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = 'ChartTooltipContent'

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { payload?: ReadonlyArray<LegendPayload>; verticalAlign?: 'top' | 'bottom' | 'middle'; hideIcon?: boolean; nameKey?: string }
>(({ className, hideIcon = false, payload, verticalAlign = 'bottom', nameKey }, ref) => {
  const { config } = useChart()
  if (!payload?.length) return null
  return (
    <div ref={ref} className={cn('flex items-center justify-center gap-4', verticalAlign === 'top' ? 'pb-3' : 'pt-3', className)}>
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || 'value'}`
        const itemConfig = config[key]
        return (
          <div key={item.value} className="flex items-center gap-1.5">
            {!hideIcon && <div className="h-2 w-2 shrink-0" style={{ background: item.color }} />}
            <span className="text-xs text-muted-foreground uppercase tracking-widest">{itemConfig?.label || item.value}</span>
          </div>
        )
      })}
    </div>
  )
})
ChartLegendContent.displayName = 'ChartLegendContent'

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle, useChart }

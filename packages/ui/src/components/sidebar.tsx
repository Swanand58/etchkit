import * as React from 'react'
import { cn } from '../lib/utils'

type SidebarContextProps = {
  open: boolean
  setOpen: (open: boolean) => void
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextProps>({
  open: true,
  setOpen: () => {},
  collapsed: false,
  setCollapsed: () => {},
})

function useSidebar() {
  return React.useContext(SidebarContext)
}

function SidebarProvider({ children, defaultOpen = true, defaultCollapsed = false }: {
  children: React.ReactNode
  defaultOpen?: boolean
  defaultCollapsed?: boolean
}) {
  const [open, setOpen] = React.useState(defaultOpen)
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)
  return (
    <SidebarContext.Provider value={{ open, setOpen, collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

const Sidebar = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    const { open, collapsed } = useSidebar()
    return (
      <aside
        ref={ref}
        data-state={open ? 'open' : 'closed'}
        data-collapsed={collapsed}
        className={cn(
          'flex flex-col h-full border-r-2 border-foreground bg-background transition-[width]',
          collapsed ? 'w-14' : 'w-64',
          !open && 'hidden',
          className
        )}
        {...props}
      >
        {children}
      </aside>
    )
  }
)
Sidebar.displayName = 'Sidebar'

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-2 border-b-2 border-foreground p-4', className)} {...props} />
  )
)
SidebarHeader.displayName = 'SidebarHeader'

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-1 flex-col gap-2 overflow-auto p-2', className)} {...props} />
  )
)
SidebarContent.displayName = 'SidebarContent'

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('border-t-2 border-foreground p-4', className)} {...props} />
  )
)
SidebarFooter.displayName = 'SidebarFooter'

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-0.5', className)} {...props} />
  )
)
SidebarGroup.displayName = 'SidebarGroup'

const SidebarGroupLabel = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('px-2 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground', className)}
      {...props}
    />
  )
)
SidebarGroupLabel.displayName = 'SidebarGroupLabel'

const SidebarMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
)
SidebarMenuItem.displayName = 'SidebarMenuItem'

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isActive?: boolean }
>(({ className, isActive, ...props }, ref) => (
  <button
    ref={ref}
    data-active={isActive}
    className={cn(
      'flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-accent',
      isActive && 'bg-foreground text-background hover:bg-foreground',
      className
    )}
    {...props}
  />
))
SidebarMenuButton.displayName = 'SidebarMenuButton'

const SidebarSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('my-2 h-[2px] bg-foreground', className)} {...props} />
  )
)
SidebarSeparator.displayName = 'SidebarSeparator'

const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, onClick, ...props }, ref) => {
    const { open, setOpen } = useSidebar()
    return (
      <button
        ref={ref}
        onClick={(e) => { setOpen(!open); onClick?.(e) }}
        className={cn('flex h-9 w-9 items-center justify-center border-2 border-foreground hover:bg-foreground hover:text-background transition-colors', className)}
        {...props}
      />
    )
  }
)
SidebarTrigger.displayName = 'SidebarTrigger'

export {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupLabel, SidebarMenuItem, SidebarMenuButton,
  SidebarSeparator, SidebarTrigger, useSidebar,
}

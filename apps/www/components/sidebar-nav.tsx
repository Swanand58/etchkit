'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const components = [
  'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'avatar', 'badge',
  'breadcrumb', 'button', 'calendar', 'card', 'carousel', 'chart', 'checkbox',
  'collapsible', 'command', 'context-menu', 'copy-button', 'dialog', 'drawer',
  'dropdown-menu', 'empty-state', 'form', 'hover-card', 'input', 'input-otp',
  'kbd', 'label', 'menubar', 'navigation-menu', 'number-input', 'pagination',
  'popover', 'progress', 'radio-group', 'resizable', 'scroll-area', 'select',
  'separator', 'sheet', 'sidebar', 'skeleton', 'slider', 'sonner', 'stepper',
  'switch', 'table', 'tabs', 'textarea', 'timeline', 'toggle', 'toggle-group',
  'tooltip',
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-0.5">
      {components.map((comp) => {
        const href = `/docs/components/${comp}`
        const isActive = pathname === href
        return (
          <Link
            key={comp}
            href={href}
            className={cn(
              'px-3 py-1.5 text-sm font-medium capitalize transition-colors',
              isActive
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:bg-accent hover:text-foreground'
            )}
          >
            {comp}
          </Link>
        )
      })}
    </nav>
  )
}

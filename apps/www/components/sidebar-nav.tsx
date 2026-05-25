'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const components = [
  'accordion', 'alert', 'avatar', 'badge', 'breadcrumb', 'button', 'card',
  'checkbox', 'collapsible', 'command', 'context-menu', 'dialog', 'drawer',
  'dropdown-menu', 'form', 'hover-card', 'input', 'label', 'menubar',
  'navigation-menu', 'pagination', 'popover', 'progress', 'radio-group',
  'scroll-area', 'select', 'separator', 'sheet', 'skeleton', 'slider',
  'sonner', 'switch', 'table', 'tabs', 'textarea', 'toggle', 'toggle-group',
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

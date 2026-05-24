'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const components = [
  'alert', 'avatar', 'badge', 'button', 'card',
  'checkbox', 'dialog', 'input', 'label', 'select',
  'separator', 'switch', 'tabs', 'tooltip',
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

import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-widest">etchkit</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/docs" className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </Link>
          <Link href="/docs/components/button" className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            Components
          </Link>
          <Link
            href="https://github.com/Swanand58/etchkit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

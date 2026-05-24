import { SidebarNav } from '@/components/sidebar-nav'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl flex min-h-[calc(100vh-56px)]">
      <aside className="w-56 shrink-0 border-r-2 border-foreground py-8 px-4 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
          Components
        </p>
        <SidebarNav />
      </aside>
      <main className="flex-1 py-10 px-10 overflow-auto">{children}</main>
    </div>
  )
}

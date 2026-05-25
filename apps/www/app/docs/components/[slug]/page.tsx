import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { PreviewCodeTabs } from '@/components/preview-code-tabs'
import { CodeBlock } from '@/components/code-block'
import { componentUsage } from '@/lib/component-usage'
import { Separator } from '@etchkit/ui'

const componentMeta: Record<string, { title: string; description: string }> = {
  accordion: { title: 'Accordion', description: 'Collapsible sections. 2px bottom border, chevron rotates open. Built on Radix Accordion.' },
  alert: { title: 'Alert', description: 'Status message with left-border accent. Variants: default, destructive.' },
  avatar: { title: 'Avatar', description: 'Square by default. 2px border. Initials fallback. Circular variant available.' },
  badge: { title: 'Badge', description: 'Inline status indicator. Square default, pill variant available.' },
  button: { title: 'Button', description: 'Triggers an action or event. Square, full-contrast, high-intent.' },
  card: { title: 'Card', description: 'Container with signature hard offset depth. The core etchkit pattern.' },
  checkbox: { title: 'Checkbox', description: 'Square checkbox. Checked: bg-foreground + white check icon.' },
  collapsible: { title: 'Collapsible', description: 'Primitive open/close container. No styling — compose with your own trigger.' },
  dialog: { title: 'Dialog', description: 'Modal with offset depth effect. bg-black/60 overlay. Built on Radix Dialog.' },
  'dropdown-menu': { title: 'Dropdown Menu', description: 'Contextual menu built on Radix DropdownMenu. 2px border, square, keyboard accessible.' },
  input: { title: 'Input', description: '2px border text input. No radius. Focus ring: ring-2 ring-foreground.' },
  label: { title: 'Label', description: 'Uppercase tracked label for form fields. Built on Radix Label.' },
  popover: { title: 'Popover', description: 'Floating panel anchored to a trigger. 2px border, no radius. Built on Radix Popover.' },
  progress: { title: 'Progress', description: 'Linear progress bar. 2px border track, bg-foreground fill. Built on Radix Progress.' },
  'radio-group': { title: 'Radio Group', description: 'Square radio buttons. Selected: solid bg-foreground indicator. Built on Radix RadioGroup.' },
  select: { title: 'Select', description: 'Dropdown built on Radix Select. 2px border, square, left-border highlight on item focus.' },
  separator: { title: 'Separator', description: '2px full-contrast divider. Horizontal or vertical.' },
  skeleton: { title: 'Skeleton', description: 'Loading placeholder. animate-pulse on bg-muted. No Radix dependency.' },
  slider: { title: 'Slider', description: 'Range input. Square thumb, 2px border, bg-foreground fill. Built on Radix Slider.' },
  switch: { title: 'Switch', description: 'Square toggle. Square thumb. No radius. Radix Switch.' },
  table: { title: 'Table', description: '2px border table. Filled header (bg-foreground text-background). Full-contrast rows.' },
  tabs: { title: 'Tabs', description: 'Radix Tabs. Active tab: bg-foreground text-background (no underline).' },
  textarea: { title: 'Textarea', description: '2px border multi-line input. No radius. resize-none by default.' },
  toggle: { title: 'Toggle', description: 'Two-state button. Active: bg-foreground text-background. Built on Radix Toggle.' },
  'toggle-group': { title: 'Toggle Group', description: 'Group of connected toggles. Borders collapse between items. Built on Radix ToggleGroup.' },
  tooltip: { title: 'Tooltip', description: 'bg-foreground text-background, 2px border, no radius. Radix Tooltip.' },
  breadcrumb: { title: 'Breadcrumb', description: 'Accessible navigation trail. Chevron separators. Built with semantic nav + ol.' },
  pagination: { title: 'Pagination', description: 'Page navigation using button variants. Active page = filled default variant.' },
  sheet: { title: 'Sheet', description: 'Side panel that slides in from any edge. Built on Radix Dialog.' },
  'hover-card': { title: 'Hover Card', description: 'Preview card on hover. 2px border, no radius. Built on Radix HoverCard.' },
  'context-menu': { title: 'Context Menu', description: 'Right-click menu. Same structure as Dropdown Menu. Built on Radix ContextMenu.' },
  menubar: { title: 'Menubar', description: 'Horizontal application menu. Active trigger = bg-foreground text-background. Built on Radix Menubar.' },
  'scroll-area': { title: 'Scroll Area', description: 'Custom scroll container. bg-foreground scrollbar thumb. Built on Radix ScrollArea.' },
  sonner: { title: 'Sonner', description: 'Toast notifications. 2px border, square, etchkit color tokens. Built on Sonner.' },
  'navigation-menu': { title: 'Navigation Menu', description: 'Site navigation with dropdown panels. Built on Radix NavigationMenu.' },
  form: { title: 'Form', description: 'Form validation wrapper for react-hook-form. FormField, FormItem, FormLabel, FormControl, FormMessage.' },
  command: { title: 'Command', description: 'Command palette / search dialog. bg-foreground on selected item. Built on cmdk.' },
  drawer: { title: 'Drawer', description: 'Bottom drawer with drag handle. Slides up from bottom edge. Built on Vaul.' },
}

export function generateStaticParams() {
  return Object.keys(componentMeta).map((slug) => ({ slug }))
}

function getComponentSource(slug: string): string {
  try {
    const filePath = path.join(process.cwd(), '../../packages/ui/src/components', `${slug}.tsx`)
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    return '// Source not available'
  }
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = componentMeta[slug]
  if (!meta) notFound()

  const source = getComponentSource(slug)
  const usages = componentUsage[slug] ?? []

  return (
    <div className="max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
        Components
      </p>
      <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
      <p className="text-muted-foreground mb-8">{meta.description}</p>

      <section className="mb-10">
        <PreviewCodeTabs slug={slug} source={source} />
      </section>

      <Separator className="mb-10" />

      <section className="mb-10">
        <p className="text-xs font-medium uppercase tracking-widest mb-4">Installation</p>
        <CodeBlock code={`npx @etchkit/cli@latest add ${slug}`} language="bash" />
      </section>

      {usages.length > 0 && (
        <>
          <Separator className="mb-10" />
          <section>
            <p className="text-xs font-medium uppercase tracking-widest mb-6">Usage</p>
            <div className="flex flex-col gap-8">
              {usages.map((usage) => (
                <div key={usage.title}>
                  <p className="text-sm font-medium mb-3 text-muted-foreground">{usage.title}</p>
                  <CodeBlock code={usage.code} language="tsx" />
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}

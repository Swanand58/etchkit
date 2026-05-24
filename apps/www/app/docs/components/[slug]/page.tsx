import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { PreviewCodeTabs } from '@/components/preview-code-tabs'
import { CodeBlock } from '@/components/code-block'
import { componentUsage } from '@/lib/component-usage'
import { Separator } from '@etchkit/ui'

const componentMeta: Record<string, { title: string; description: string }> = {
  button: { title: 'Button', description: 'Triggers an action or event. Square, full-contrast, high-intent.' },
  card: { title: 'Card', description: 'Container with signature hard offset depth. The core etchkit pattern.' },
  input: { title: 'Input', description: '2px border text input. No radius. Focus ring: ring-2 ring-foreground.' },
  label: { title: 'Label', description: 'Uppercase tracked label for form fields. Built on Radix Label.' },
  badge: { title: 'Badge', description: 'Inline status indicator. Square default, pill variant available.' },
  checkbox: { title: 'Checkbox', description: 'Square checkbox. Checked: bg-foreground + white check icon.' },
  select: { title: 'Select', description: 'Dropdown built on Radix Select. 2px border, square, left-border highlight on item focus.' },
  dialog: { title: 'Dialog', description: 'Modal with offset depth effect. bg-black/60 overlay. Built on Radix Dialog.' },
  alert: { title: 'Alert', description: 'Status message with left-border accent. Variants: default, destructive.' },
  tabs: { title: 'Tabs', description: 'Radix Tabs. Active tab: bg-foreground text-background (no underline).' },
  switch: { title: 'Switch', description: 'Square toggle. Square thumb. No radius. Radix Switch.' },
  tooltip: { title: 'Tooltip', description: 'bg-foreground text-background, 2px border, no radius. Radix Tooltip.' },
  separator: { title: 'Separator', description: '2px full-contrast divider. Horizontal or vertical.' },
  avatar: { title: 'Avatar', description: 'Square by default. 2px border. Initials fallback. Circular variant available.' },
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

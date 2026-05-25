import Link from 'next/link'
import { Button } from '@etchkit/ui'

export default function DocsPage() {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Getting started</p>
      <h1 className="text-4xl font-bold mb-4">Introduction</h1>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        etchkit is a copy-paste component library built on Radix UI and Tailwind CSS v4.
        52 components. Square edges. 2px borders. Zero compromise.
      </p>

      <div className="flex flex-col gap-4 mb-10">
        <div className="border-2 border-foreground p-6">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-2">Copy-paste model</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Like shadcn/ui — components copy directly into your project. You own the source. No version lock-in, no black-box imports.
          </p>
        </div>
        <div className="border-2 border-foreground p-6">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-2">Radix UI primitives</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Built on @radix-ui for accessible, unstyled primitives. Keyboard navigation, focus management, and ARIA handled automatically.
          </p>
        </div>
        <div className="border-2 border-foreground p-6">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-2">Tailwind CSS v4</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            CSS-first config with @theme inline tokens. Install @etchkit/tailwind for the design tokens, or copy them manually into your project.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-6">Quick start</h2>

      <div className="border-2 border-foreground p-6 mb-4">
        <h3 className="text-xs font-medium uppercase tracking-widest mb-3">1. Initialize</h3>
        <pre className="text-sm font-mono bg-muted p-4 border-2 border-foreground overflow-x-auto">npx @etchkit/cli@latest init</pre>
        <p className="text-xs text-muted-foreground mt-3">Creates etchkit.config.json and installs the @etchkit/tailwind theme package.</p>
      </div>

      <div className="border-2 border-foreground p-6 mb-4">
        <h3 className="text-xs font-medium uppercase tracking-widest mb-3">2. Add components</h3>
        <pre className="text-sm font-mono bg-muted p-4 border-2 border-foreground overflow-x-auto">{`npx @etchkit/cli@latest add button
npx @etchkit/cli@latest add card
npx @etchkit/cli@latest add input`}</pre>
        <p className="text-xs text-muted-foreground mt-3">Components copy to your components/ui directory. Dependencies install automatically.</p>
      </div>

      <div className="border-2 border-foreground p-6 mb-8">
        <h3 className="text-xs font-medium uppercase tracking-widest mb-3">3. Import and use</h3>
        <pre className="text-sm font-mono bg-muted p-4 border-2 border-foreground overflow-x-auto">{`import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}`}</pre>
      </div>

      <div className="flex gap-3 flex-wrap">
        <Link href="/docs/components/button">
          <Button>Browse components →</Button>
        </Link>
        <Link href="/playground">
          <Button variant="outline">Try playground →</Button>
        </Link>
      </div>
    </div>
  )
}

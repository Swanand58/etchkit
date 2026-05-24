import Link from 'next/link'
import { Button } from '@etchkit/ui'

export default function DocsPage() {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Docs</p>
      <h1 className="text-4xl font-bold mb-4">Getting started</h1>
      <p className="text-muted-foreground mb-8">
        etchkit is a copy-paste component library. Run the CLI to initialize your project, then add components one by one.
      </p>

      <div className="border-2 border-foreground p-6 mb-6">
        <h2 className="text-sm font-medium uppercase tracking-widest mb-3">1. Init</h2>
        <pre className="text-sm font-mono bg-muted p-3 border-2 border-foreground">
          npx @etchkit/cli@latest init
        </pre>
      </div>

      <div className="border-2 border-foreground p-6 mb-6">
        <h2 className="text-sm font-medium uppercase tracking-widest mb-3">2. Add components</h2>
        <pre className="text-sm font-mono bg-muted p-3 border-2 border-foreground">
          npx @etchkit/cli@latest add button{'\n'}
          npx @etchkit/cli@latest add card{'\n'}
          npx @etchkit/cli@latest add input
        </pre>
      </div>

      <div className="border-2 border-foreground p-6">
        <h2 className="text-sm font-medium uppercase tracking-widest mb-3">3. Use in your app</h2>
        <pre className="text-sm font-mono bg-muted p-3 border-2 border-foreground overflow-x-auto">
          {`import { Button } from '@/components/ui/button'\n\nexport function MyComponent() {\n  return <Button>Click me</Button>\n}`}
        </pre>
      </div>

      <div className="mt-8">
        <Link href="/docs/components/button">
          <Button>Browse components →</Button>
        </Link>
      </div>
    </div>
  )
}

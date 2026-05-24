import Link from 'next/link'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Input,
  Label,
  Badge,
} from '@etchkit/ui'
import { CopyCommand } from '@/components/copy-command'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      {/* Hero */}
      <section className="flex flex-col items-start py-24 gap-6 border-b-2 border-foreground">
        <Badge variant="outline">v0.0.1 — early access</Badge>
        <h1 className="text-5xl font-bold tracking-tight leading-none max-w-2xl">
          No shadows.<br />No softness.<br />Just structure.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          etchkit is a copy-paste component library built on Radix UI and Tailwind CSS.
          Square edges. Hard borders. Brutal clarity.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/docs/components/button">
            <Button size="lg">Browse components</Button>
          </Link>
          <Link href="/docs">
            <Button variant="outline" size="lg">Read the docs</Button>
          </Link>
        </div>
        <CopyCommand command="npx @etchkit/cli@latest init" />
      </section>

      {/* Live demo */}
      <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b-2 border-foreground">
        <div className="flex flex-col justify-center gap-4">
          <Label>Live preview</Label>
          <h2 className="text-3xl font-bold">See it in action.</h2>
          <p className="text-muted-foreground">
            Every component follows the same design language — hard offset depth, zero radius, full contrast borders. No exceptions.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Badge>default</Badge>
            <Badge variant="outline">outline</Badge>
            <Badge variant="destructive">destructive</Badge>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Create account</CardTitle>
              <CardDescription>Start building with etchkit.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get started</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Component grid */}
      <section className="py-20">
        <Label>Components</Label>
        <h2 className="text-3xl font-bold mt-2 mb-10">14 components. One philosophy.</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-px border-2 border-foreground">
          {[
            'button', 'card', 'input', 'label', 'badge',
            'checkbox', 'select', 'dialog', 'alert', 'tabs',
            'switch', 'tooltip', 'separator', 'avatar',
          ].map((comp) => (
            <Link
              key={comp}
              href={`/docs/components/${comp}`}
              className="flex items-center justify-center p-6 text-xs font-medium uppercase tracking-widest border-r-2 border-b-2 border-foreground hover:bg-foreground hover:text-background transition-colors last:border-r-0"
            >
              {comp}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

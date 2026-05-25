import Link from 'next/link'
import {
  Button,
  Badge,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Input,
  Label,
  Checkbox,
  Switch,
  Alert, AlertTitle, AlertDescription,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  Textarea,
  Progress,
  Separator,
  Slider,
} from '@etchkit/ui'
import { CopyCommand } from '@/components/copy-command'
import { ArrowRight, Check, Github, Zap, Copy, Package } from 'lucide-react'

const ALL_COMPONENTS = [
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

const EXCLUSIVE = new Set(['stepper', 'timeline', 'empty-state', 'kbd', 'number-input', 'copy-button', 'sidebar'])

export default function HomePage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="outline">v0.0.2 — now with 52 components</Badge>
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight leading-[1.02]">
              No shadows.<br />No softness.<br />Just structure.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              etchkit is a copy-paste UI component library. Built on Radix UI and Tailwind CSS v4.
              Square edges. 2px borders. Zero compromise.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/docs/components/button">
                <Button size="lg">
                  Browse components
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="https://github.com/Swanand58/etchkit" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </Link>
            </div>
            <CopyCommand command="npx @etchkit/cli@latest init" />
          </div>

          {/* Live demo */}
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Deploy to production</CardTitle>
                <CardDescription>my-app · main · 3 changed files</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="hero-env">Environment</Label>
                  <Select defaultValue="production">
                    <SelectTrigger id="hero-env"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="production">Production</SelectItem>
                      <SelectItem value="staging">Staging</SelectItem>
                      <SelectItem value="preview">Preview</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="hero-tag">Release tag</Label>
                  <Input id="hero-tag" placeholder="v1.4.2" defaultValue="v1.4.2" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Build progress</span><span>100%</span>
                  </div>
                  <Progress value={100} />
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="hero-notify" defaultChecked />
                  <Label htmlFor="hero-notify">Notify team on deploy</Label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button className="w-full">Deploy now</Button>
                <p className="text-xs text-muted-foreground text-center">
                  No rounded corners were harmed in building this.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="border-b-2 border-foreground bg-surface-dark text-surface-dark-foreground">
        <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 sm:grid-cols-4 divide-x-2 divide-surface-dark-foreground/20">
          {[
            { value: '52', label: 'Components' },
            { value: '7', label: 'Exclusives' },
            { value: 'Radix UI', label: 'Primitives' },
            { value: 'Tailwind v4', label: 'Styling engine' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1 px-6 first:pl-0 last:pr-0">
              <p className="text-2xl font-bold font-mono">{value}</p>
              <p className="text-xs font-medium uppercase tracking-widest opacity-50">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Philosophy</p>
            <h2 className="text-4xl font-bold leading-tight">
              Same primitives.<br />Different soul.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Built on the same Radix UI primitives and copy-paste model — but with a deliberate rejection of softness.
              No border-radius. No box-shadow. No decorative gradients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every component follows one visual law: 2px hard border, flat contrast fill. The result is UI that communicates precision.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              {[
                'Zero border-radius across every component',
                'No box-shadow, anywhere, ever',
                '2px full-contrast borders on everything',
                'Offset depth effect replaces card shadow',
                '7 exclusive components not in shadcn/ui',
                'Works with any Tailwind CSS v4 project',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="h-5 w-5 shrink-0 flex items-center justify-center border-2 border-foreground bg-foreground">
                    <Check className="h-3 w-3 text-background" />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Link href="/docs">
                <Button variant="outline">Read the docs <ArrowRight className="h-4 w-4 ml-2" /></Button>
              </Link>
            </div>
          </div>

          {/* Side-by-side comparison */}
          <div className="flex flex-col gap-4">
            {/* Soft card (others) */}
            <div className="border-2 border-foreground p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-5">Others</p>
              <div className="flex flex-col gap-3">
                <div
                  style={{ borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', background: '#f9fafb', padding: '16px' }}
                >
                  <p className="text-sm font-medium" style={{ color: '#111827' }}>Soft component</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>rounded corners, subtle shadow, gentle border</p>
                </div>
                <button
                  style={{ background: '#3b82f6', color: 'white', borderRadius: '8px', padding: '10px 16px', fontSize: '14px', fontWeight: 500, boxShadow: '0 1px 2px rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', width: '100%' }}
                >
                  Soft button
                </button>
                <div className="flex items-center gap-2">
                  <div style={{ height: '16px', width: '16px', borderRadius: '4px', border: '1px solid #d1d5db', background: 'white' }} />
                  <span className="text-sm" style={{ color: '#6b7280' }}>Soft checkbox</span>
                </div>
              </div>
            </div>

            {/* etchkit card */}
            <div className="border-2 border-foreground p-6 relative">
              <div className="absolute top-[6px] left-[6px] right-0 bottom-0 border-2 border-foreground -z-10" />
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-5">etchkit</p>
              <div className="flex flex-col gap-3">
                <div className="border-2 border-foreground p-4">
                  <p className="text-sm font-medium">Hard component</p>
                  <p className="text-xs text-muted-foreground mt-1">2px border, no radius, no shadow</p>
                </div>
                <Button className="w-full">Hard button</Button>
                <div className="flex items-center gap-2">
                  <Checkbox id="cmp-hard" defaultChecked />
                  <Label htmlFor="cmp-hard">Hard checkbox</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LIVE SHOWCASE ─── */}
      <section className="border-b-2 border-foreground bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Showcase</p>
          <h2 className="text-3xl font-bold mb-10">Every component. One aesthetic.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Form elements */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Form</p>
              <div className="border-2 border-foreground p-6 bg-background flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label>Full name</Label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>Role</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dev">Developer</SelectItem>
                      <SelectItem value="design">Designer</SelectItem>
                      <SelectItem value="pm">Product</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>Notes</Label>
                  <Textarea placeholder="Any additional info…" className="resize-none" rows={3} />
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="sc-notif" />
                  <Label htmlFor="sc-notif">Email notifications</Label>
                </div>
                <Button>Submit</Button>
              </div>
            </div>

            {/* Feedback */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Feedback</p>
              <div className="border-2 border-foreground p-6 bg-background flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>default</Badge>
                  <Badge variant="outline">outline</Badge>
                  <Badge variant="destructive">error</Badge>
                  <Badge variant="pill">pill</Badge>
                </div>
                <Separator />
                <Alert>
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>Your changes have been saved.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>Session expired. Please log in again.</AlertDescription>
                </Alert>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Upload progress</span><span>68%</span>
                  </div>
                  <Progress value={68} />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Navigation</p>
              <div className="border-2 border-foreground p-6 bg-background flex flex-col gap-4">
                <Tabs defaultValue="preview">
                  <TabsList>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="docs">Docs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview">
                    <div className="border-2 border-foreground p-4 text-sm text-muted-foreground">
                      Live component renders here.
                    </div>
                  </TabsContent>
                  <TabsContent value="code">
                    <div className="border-2 border-foreground p-4 text-xs font-mono bg-muted">
                      {'<Button>Click me</Button>'}
                    </div>
                  </TabsContent>
                  <TabsContent value="docs">
                    <div className="border-2 border-foreground p-4 text-sm text-muted-foreground">
                      Read the documentation.
                    </div>
                  </TabsContent>
                </Tabs>
                <Separator />
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Volume</span>
                    <span className="font-mono">72</span>
                  </div>
                  <Slider defaultValue={[72]} max={100} step={1} />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button size="sm">Save</Button>
                  <Button size="sm" variant="outline">Cancel</Button>
                  <Button size="sm" variant="destructive">Delete</Button>
                  <Button size="sm" variant="ghost">More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXCLUSIVE COMPONENTS ─── */}
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Exclusives</p>
          <h2 className="text-3xl font-bold mb-3">Components you won't find elsewhere.</h2>
          <p className="text-muted-foreground mb-10">7 original components built specifically for etchkit. Not in shadcn/ui, not in any other library.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border-2 border-foreground">
            {[
              { name: 'Stepper', slug: 'stepper', desc: 'Multi-step progress indicator with horizontal and vertical modes.' },
              { name: 'Timeline', slug: 'timeline', desc: 'Vertical event timeline with dot, connector, title, and timestamp.' },
              { name: 'Empty State', slug: 'empty-state', desc: 'Dashed-border placeholder with icon, title, description, and action.' },
              { name: 'Kbd', slug: 'kbd', desc: 'Keyboard shortcut badge. Square, monospace, 2px border.' },
              { name: 'Number Input', slug: 'number-input', desc: 'Spinner with − and + controls, min/max/step clamping.' },
              { name: 'Copy Button', slug: 'copy-button', desc: 'One-click clipboard copy with 2s animated feedback.' },
              { name: 'Sidebar', slug: 'sidebar', desc: 'Collapsible application sidebar with context-based toggle.' },
            ].map(({ name, slug, desc }) => (
              <Link
                key={slug}
                href={`/docs/components/${slug}`}
                className="group flex flex-col gap-2 p-6 border-r-2 border-b-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <p className="text-sm font-bold uppercase tracking-widest">{name}</p>
                <p className="text-xs text-muted-foreground group-hover:text-background/70 leading-relaxed">{desc}</p>
              </Link>
            ))}
            <div className="flex items-center justify-center p-6 border-r-2 border-b-2 border-foreground">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground text-center">More coming</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALL COMPONENTS GRID ─── */}
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Components</p>
          <div className="flex items-end justify-between mb-3">
            <h2 className="text-3xl font-bold">52 components. One philosophy.</h2>
          </div>
          <p className="text-muted-foreground mb-10">
            Click any component to view docs and copy the source.{' '}
            <span className="font-semibold text-foreground">Bold</span> = etchkit exclusive.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px border-2 border-foreground">
            {ALL_COMPONENTS.map((comp) => (
              <Link
                key={comp}
                href={`/docs/components/${comp}`}
                className={`flex items-center justify-center p-4 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors border-r-2 border-b-2 border-foreground text-center leading-tight ${EXCLUSIVE.has(comp) ? 'font-bold' : 'font-medium'}`}
              >
                {comp}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="border-b-2 border-foreground bg-surface-dark text-surface-dark-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-widest opacity-50 mb-2">How it works</p>
          <h2 className="text-3xl font-bold mb-12">Copy-paste. You own the code.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-5 w-5" />,
                step: '01',
                title: 'Init your project',
                desc: 'Run the CLI to create etchkit.config.json and install the Tailwind CSS theme.',
                code: 'npx @etchkit/cli@latest init',
              },
              {
                icon: <Package className="h-5 w-5" />,
                step: '02',
                title: 'Add components',
                desc: 'Add individual components directly to your codebase. No package to maintain.',
                code: 'npx @etchkit/cli@latest add button',
              },
              {
                icon: <Copy className="h-5 w-5" />,
                step: '03',
                title: 'Customize freely',
                desc: 'The source lives in your project. Edit, extend, or delete — no abstraction in the way.',
                code: 'import { Button } from "@/components/ui/button"',
              },
            ].map(({ icon, step, title, desc, code }) => (
              <div key={step} className="flex flex-col gap-4 border-2 border-background/20 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border-2 border-background/30">
                    {icon}
                  </div>
                  <span className="text-4xl font-bold font-mono opacity-20">{step}</span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest">{title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{desc}</p>
                <code className="text-xs font-mono bg-background/10 border border-background/20 px-3 py-2 break-all">{code}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 flex flex-col items-center text-center gap-8">
          <Badge variant="outline">Free. Open source. Copy-paste forever.</Badge>
          <h2 className="text-5xl font-bold max-w-xl leading-tight">
            Start building brutally good UI.
          </h2>
          <p className="text-muted-foreground max-w-md text-lg">
            No signup. No subscription. Initialize in 10 seconds, add your first component in 20.
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <Link href="/docs/components/button">
              <Button size="lg">
                Browse components
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/playground">
              <Button variant="outline" size="lg">Try the playground</Button>
            </Link>
          </div>
          <CopyCommand command="npx @etchkit/cli@latest init" />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" className="h-5 w-5 shrink-0">
              <rect x="8" y="8" width="18" height="18" stroke="currentColor" strokeWidth="2"/>
              <rect x="2" y="2" width="18" height="18" fill="currentColor"/>
            </svg>
            <span className="text-sm font-semibold uppercase tracking-widest">etchkit</span>
            <span className="text-xs text-muted-foreground">No shadows. No softness. Just structure.</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/docs" className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
            <Link href="/playground" className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Playground</Link>
            <Link href="/docs/components/button" className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Components</Link>
            <Link
              href="https://github.com/Swanand58/etchkit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}

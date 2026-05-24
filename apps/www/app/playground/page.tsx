'use client'

import * as React from 'react'
import {
  Button, Card, CardHeader, CardTitle, CardContent, CardFooter,
  Input, Label, Badge, Checkbox, Alert, AlertTitle, AlertDescription,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Switch, Separator, Avatar, AvatarFallback,
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  Tooltip, TooltipProvider, TooltipTrigger, TooltipContent,
} from '@etchkit/ui'
import { AlertCircle, Copy, Check } from 'lucide-react'

interface Theme {
  background: string
  foreground: string
  muted: string
  mutedForeground: string
  border: string
  destructive: string
  accent: string
  accentForeground: string
}

const presets: Record<string, Theme> = {
  Default: {
    background: '0 0% 100%',
    foreground: '0 0% 3.9%',
    muted: '0 0% 96%',
    mutedForeground: '0 0% 45%',
    border: '0 0% 3.9%',
    destructive: '0 84% 60%',
    accent: '0 0% 96%',
    accentForeground: '0 0% 3.9%',
  },
  Dark: {
    background: '0 0% 3.9%',
    foreground: '0 0% 98%',
    muted: '0 0% 14.9%',
    mutedForeground: '0 0% 63.9%',
    border: '0 0% 98%',
    destructive: '0 84% 60%',
    accent: '0 0% 14.9%',
    accentForeground: '0 0% 98%',
  },
  Blueprint: {
    background: '214 60% 97%',
    foreground: '214 80% 10%',
    muted: '214 30% 90%',
    mutedForeground: '214 30% 40%',
    border: '214 80% 10%',
    destructive: '0 84% 50%',
    accent: '214 30% 90%',
    accentForeground: '214 80% 10%',
  },
  Warm: {
    background: '30 20% 98%',
    foreground: '30 30% 8%',
    muted: '30 15% 93%',
    mutedForeground: '30 15% 42%',
    border: '30 30% 8%',
    destructive: '0 84% 55%',
    accent: '30 15% 93%',
    accentForeground: '30 30% 8%',
  },
  Forest: {
    background: '120 20% 97%',
    foreground: '120 40% 8%',
    muted: '120 15% 91%',
    mutedForeground: '120 15% 40%',
    border: '120 40% 8%',
    destructive: '0 84% 50%',
    accent: '120 15% 91%',
    accentForeground: '120 40% 8%',
  },
  Noir: {
    background: '0 0% 8%',
    foreground: '0 0% 90%',
    muted: '0 0% 16%',
    mutedForeground: '0 0% 55%',
    border: '0 0% 90%',
    destructive: '0 70% 55%',
    accent: '0 0% 16%',
    accentForeground: '0 0% 90%',
  },
}

function generateCSS(theme: Theme): string {
  return `:root {
  --background: ${theme.background};
  --foreground: ${theme.foreground};
  --muted: ${theme.muted};
  --muted-foreground: ${theme.mutedForeground};
  --border: ${theme.border};
  --input: ${theme.border};
  --ring: ${theme.border};
  --accent: ${theme.accent};
  --accent-foreground: ${theme.accentForeground};
  --destructive: ${theme.destructive};
  --destructive-foreground: 0 0% 98%;
  --card: ${theme.background};
  --card-foreground: ${theme.foreground};
  --radius: 0rem;
}`
}

export default function PlaygroundPage() {
  const [activePreset, setActivePreset] = React.useState('Default')
  const [theme, setTheme] = React.useState<Theme>(presets.Default)
  const [copied, setCopied] = React.useState(false)

  function applyPreset(name: string) {
    setActivePreset(name)
    setTheme(presets[name])
  }

  async function copyCSS() {
    await navigator.clipboard.writeText(generateCSS(theme))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const cssVars = {
    // raw HSL vars — etchkit.css expects these WITHOUT hsl() wrapper
    '--background': theme.background,
    '--foreground': theme.foreground,
    '--muted': theme.muted,
    '--muted-foreground': theme.mutedForeground,
    '--border': theme.border,
    '--input': theme.border,
    '--ring': theme.border,
    '--accent': theme.accent,
    '--accent-foreground': theme.accentForeground,
    '--destructive': theme.destructive,
    '--destructive-foreground': '0 0% 98%',
    '--card': theme.background,
    '--card-foreground': theme.foreground,
    // also override --color-* directly — Tailwind v4 utility classes use these
    '--color-background': `hsl(${theme.background})`,
    '--color-foreground': `hsl(${theme.foreground})`,
    '--color-muted': `hsl(${theme.muted})`,
    '--color-muted-foreground': `hsl(${theme.mutedForeground})`,
    '--color-border': `hsl(${theme.border})`,
    '--color-input': `hsl(${theme.border})`,
    '--color-ring': `hsl(${theme.border})`,
    '--color-accent': `hsl(${theme.accent})`,
    '--color-accent-foreground': `hsl(${theme.accentForeground})`,
    '--color-destructive': `hsl(${theme.destructive})`,
    '--color-destructive-foreground': 'hsl(0 0% 98%)',
    '--color-card': `hsl(${theme.background})`,
    '--color-card-foreground': `hsl(${theme.foreground})`,
  } as React.CSSProperties

  return (
    <div className="min-h-screen">
      {/* header bar */}
      <div className="sticky top-14 z-40 border-b-2 border-foreground bg-background">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground mr-2">
              Preset
            </span>
            {Object.keys(presets).map((name) => (
              <button
                key={name}
                onClick={() => applyPreset(name)}
                className={`px-3 py-1 text-xs font-medium uppercase tracking-widest border-2 border-foreground transition-colors ${
                  activePreset === name
                    ? 'bg-foreground text-background'
                    : 'bg-background text-foreground hover:bg-foreground hover:text-background'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
          <button
            onClick={copyCSS}
            className="flex items-center gap-2 border-2 border-foreground px-3 py-1 text-xs font-medium uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copied ? 'Copied' : 'Copy CSS'}
          </button>
        </div>
      </div>

      {/* token sliders */}
      <div className="border-b-2 border-foreground bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <SliderGroup
            label="BG Lightness"
            value={parseHslL(theme.background)}
            onChange={(v) => setTheme((t) => ({ ...t, background: setHslL(t.background, v) }))}
          />
          <SliderGroup
            label="FG Lightness"
            value={parseHslL(theme.foreground)}
            onChange={(v) => setTheme((t) => ({ ...t, foreground: setHslL(t.foreground, v), border: setHslL(t.border, v) }))}
          />
          <SliderGroup
            label="Muted Lightness"
            value={parseHslL(theme.muted)}
            onChange={(v) => setTheme((t) => ({ ...t, muted: setHslL(t.muted, v), accent: setHslL(t.accent, v) }))}
          />
          <SliderGroup
            label="Accent Hue"
            value={parseHslH(theme.foreground)}
            max={360}
            onChange={(v) =>
              setTheme((t) => ({
                ...t,
                foreground: setHslH(t.foreground, v),
                border: setHslH(t.border, v),
                accentForeground: setHslH(t.accentForeground, v),
              }))
            }
          />
        </div>
      </div>

      {/* component canvas */}
      <div style={cssVars} className="bg-background text-foreground transition-colors duration-150">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {/* Buttons */}
          <Section title="Button">
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex gap-2 mt-2">
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
            </div>
          </Section>

          {/* Card */}
          <Section title="Card">
            <Card>
              <CardHeader>
                <CardTitle>Project alpha</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Deploy your app in one click.</p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm">Deploy</Button>
                <Button size="sm" variant="outline">Cancel</Button>
              </CardFooter>
            </Card>
          </Section>

          {/* Input + Label */}
          <Section title="Input & Label">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="pg-email">Email</Label>
                <Input id="pg-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="pg-pass">Password</Label>
                <Input id="pg-pass" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full">Sign in</Button>
            </div>
          </Section>

          {/* Badge */}
          <Section title="Badge">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="pill">Pill</Badge>
            </div>
          </Section>

          {/* Checkbox + Switch */}
          <Section title="Checkbox & Switch">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Checkbox id="pg-cb1" defaultChecked />
                <Label htmlFor="pg-cb1">Checked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="pg-cb2" />
                <Label htmlFor="pg-cb2">Unchecked</Label>
              </div>
              <Separator />
              <div className="flex items-center gap-2">
                <Switch id="pg-sw1" defaultChecked />
                <Label htmlFor="pg-sw1">Enabled</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="pg-sw2" />
                <Label htmlFor="pg-sw2">Disabled</Label>
              </div>
            </div>
          </Section>

          {/* Alert */}
          <Section title="Alert">
            <div className="flex flex-col gap-3">
              <Alert>
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>Components copy directly into your project.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Session expired. Sign in again.</AlertDescription>
              </Alert>
            </div>
          </Section>

          {/* Select */}
          <Section title="Select">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="vite">Vite + React</SelectItem>
                <SelectItem value="remix">Remix</SelectItem>
              </SelectContent>
            </Select>
          </Section>

          {/* Tabs */}
          <Section title="Tabs">
            <Tabs defaultValue="preview">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="docs">Docs</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <p className="text-sm text-muted-foreground p-3 border-2 border-foreground">Live preview</p>
              </TabsContent>
              <TabsContent value="code">
                <p className="text-sm font-mono p-3 border-2 border-foreground bg-muted">{'<Button />'}</p>
              </TabsContent>
              <TabsContent value="docs">
                <p className="text-sm text-muted-foreground p-3 border-2 border-foreground">Documentation</p>
              </TabsContent>
            </Tabs>
          </Section>

          {/* Avatar + Separator + Tooltip */}
          <Section title="Avatar, Separator & Tooltip">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <Avatar><AvatarFallback>EK</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
                <Avatar className="rounded-full"><AvatarFallback>CD</AvatarFallback></Avatar>
              </div>
              <Separator />
              <TooltipProvider>
                <div className="flex gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">Hover for tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent><p>etchkit tooltip</p></TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
          </Section>

        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{title}</p>
      <div className="border-2 border-foreground p-5 bg-background">
        {children}
      </div>
    </div>
  )
}

function SliderGroup({
  label, value, max = 100, onChange,
}: {
  label: string
  value: number
  max?: number
  onChange: (v: number) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</span>
        <span className="text-xs font-mono text-muted-foreground">{value}</span>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-foreground"
      />
    </div>
  )
}

function parseHslL(hsl: string): number {
  const parts = hsl.trim().split(/\s+/)
  return Math.round(parseFloat(parts[2] ?? '50'))
}

function parseHslH(hsl: string): number {
  const parts = hsl.trim().split(/\s+/)
  return Math.round(parseFloat(parts[0] ?? '0'))
}

function setHslL(hsl: string, l: number): string {
  const parts = hsl.trim().split(/\s+/)
  return `${parts[0] ?? '0'} ${parts[1] ?? '0%'} ${l}%`
}

function setHslH(hsl: string, h: number): string {
  const parts = hsl.trim().split(/\s+/)
  return `${h} ${parts[1] ?? '0%'} ${parts[2] ?? '50%'}`
}

'use client'

import * as React from 'react'
import {
  Button, Card, CardHeader, CardTitle, CardContent, CardFooter,
  Input, Label, Badge, Checkbox, Alert, AlertTitle, AlertDescription,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Switch, Separator, Avatar, AvatarFallback,
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  Tooltip, TooltipProvider, TooltipTrigger, TooltipContent,
  Textarea, Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  Popover, PopoverTrigger, PopoverContent,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator,
  RadioGroup, RadioGroupItem,
  Progress, Slider, Toggle, ToggleGroup, ToggleGroupItem,
  Skeleton, Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  Collapsible, CollapsibleTrigger, CollapsibleContent,
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose,
  HoverCard, HoverCardTrigger, HoverCardContent,
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator,
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator,
  ScrollArea,
  Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator,
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from '@etchkit/ui'
import { toast } from 'sonner'
import { AlertCircle, Copy, Check, Bold, Italic, Underline, ChevronsUpDown, CalendarDays } from 'lucide-react'

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

          {/* Textarea */}
          <Section title="Textarea">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="pg-ta">Message</Label>
              <Textarea id="pg-ta" placeholder="Write something…" />
            </div>
          </Section>

          {/* Accordion */}
          <Section title="Accordion">
            <Accordion type="single" collapsible>
              <AccordionItem value="a1">
                <AccordionTrigger>What is etchkit?</AccordionTrigger>
                <AccordionContent>No shadows. No softness. Just structure.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="a2">
                <AccordionTrigger>Copy-paste model?</AccordionTrigger>
                <AccordionContent>You own the code after adding it.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="a3">
                <AccordionTrigger>Tailwind v4 required?</AccordionTrigger>
                <AccordionContent>Yes, etchkit is built on Tailwind CSS v4.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Section>

          {/* Progress + Slider */}
          <Section title="Progress & Slider">
            <div className="flex flex-col gap-4">
              <Progress value={33} />
              <Progress value={66} />
              <Progress value={100} />
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
          </Section>

          {/* Radio Group */}
          <Section title="Radio Group">
            <RadioGroup defaultValue="opt1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="opt1" id="pg-r1" />
                <Label htmlFor="pg-r1">Option one</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="opt2" id="pg-r2" />
                <Label htmlFor="pg-r2">Option two</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="opt3" id="pg-r3" />
                <Label htmlFor="pg-r3">Option three</Label>
              </div>
            </RadioGroup>
          </Section>

          {/* Toggle + Toggle Group */}
          <Section title="Toggle & Toggle Group">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <Toggle aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>
                <Toggle aria-label="Italic" defaultPressed><Italic className="h-4 w-4" /></Toggle>
                <Toggle aria-label="Underline"><Underline className="h-4 w-4" /></Toggle>
              </div>
              <ToggleGroup type="single" defaultValue="center">
                <ToggleGroupItem value="left">Left</ToggleGroupItem>
                <ToggleGroupItem value="center">Center</ToggleGroupItem>
                <ToggleGroupItem value="right">Right</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </Section>

          {/* Popover + Dropdown */}
          <Section title="Popover & Dropdown">
            <div className="flex gap-2 flex-wrap">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p className="text-sm text-muted-foreground">Popover content goes here.</p>
                </PopoverContent>
              </Popover>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">Dropdown</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Section>

          {/* Skeleton */}
          <Section title="Skeleton">
            <div className="flex flex-col gap-3">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </Section>

          {/* Table */}
          <Section title="Table">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Alpha</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell className="text-right font-mono">$250</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Beta</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell className="text-right font-mono">$150</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Section>

          {/* Collapsible */}
          <Section title="Collapsible">
            <Collapsible className="w-full">
              <div className="flex items-center justify-between border-2 border-foreground px-3 py-2">
                <span className="text-sm font-medium">Repositories (3)</span>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-0 h-auto border-0">
                    <ChevronsUpDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="border-2 border-t-0 border-foreground px-3 py-2 text-sm">etchkit</div>
              <CollapsibleContent>
                <div className="border-2 border-t-0 border-foreground px-3 py-2 text-sm text-muted-foreground">etchkit-docs</div>
                <div className="border-2 border-t-0 border-foreground px-3 py-2 text-sm text-muted-foreground">etchkit-templates</div>
              </CollapsibleContent>
            </Collapsible>
          </Section>

          {/* Breadcrumb */}
          <Section title="Breadcrumb">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="#">Docs</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>Button</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Section>

          {/* Pagination */}
          <Section title="Pagination">
            <Pagination>
              <PaginationContent>
                <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                <PaginationItem><PaginationNext href="#" /></PaginationItem>
              </PaginationContent>
            </Pagination>
          </Section>

          {/* Sheet */}
          <Section title="Sheet">
            <div className="flex gap-2 flex-wrap">
              <Sheet>
                <SheetTrigger asChild><Button variant="outline" size="sm">Right</Button></SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>Make changes to your profile here.</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col gap-3 py-4">
                    <Label htmlFor="pg-sheet-name">Name</Label>
                    <Input id="pg-sheet-name" defaultValue="etchkit" />
                  </div>
                  <SheetFooter>
                    <SheetClose asChild><Button variant="outline">Cancel</Button></SheetClose>
                    <Button>Save</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              <Sheet>
                <SheetTrigger asChild><Button variant="outline" size="sm">Left</Button></SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </Section>

          {/* Hover Card */}
          <Section title="Hover Card">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">@etchkit</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium uppercase tracking-widest">etchkit</p>
                  <p className="text-sm text-muted-foreground">No shadows. No softness. Just structure.</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3 w-3" />
                    <span>Joined 2025</span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Section>

          {/* Context Menu */}
          <Section title="Context Menu">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-20 w-full items-center justify-center border-2 border-dashed border-foreground text-xs uppercase tracking-widest text-muted-foreground">
                Right-click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-40">
                <ContextMenuLabel>Actions</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuItem>Copy</ContextMenuItem>
                <ContextMenuItem>Paste</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Delete</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </Section>

          {/* Menubar */}
          <Section title="Menubar">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New</MenubarItem>
                  <MenubarItem>Open</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Save</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Zoom In</MenubarItem>
                  <MenubarItem>Zoom Out</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </Section>

          {/* Scroll Area */}
          <Section title="Scroll Area">
            <ScrollArea className="h-40 w-full border-2 border-foreground">
              <div className="p-3">
                {Array.from({ length: 15 }, (_, i) => (
                  <p key={i} className="text-sm py-1.5 border-b border-foreground/20 last:border-0">
                    Item {i + 1}
                  </p>
                ))}
              </div>
            </ScrollArea>
          </Section>

          {/* Toast */}
          <Section title="Sonner (Toast)">
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={() => toast('Event created', { description: 'Your event has been saved.' })}>
                Default
              </Button>
              <Button size="sm" variant="outline" onClick={() => toast.success('Saved successfully')}>
                Success
              </Button>
              <Button size="sm" variant="destructive" onClick={() => toast.error('Something went wrong')}>
                Error
              </Button>
            </div>
          </Section>

          {/* Command */}
          <Section title="Command">
            <Command className="border-2 border-foreground">
              <CommandInput placeholder="Search…" />
              <CommandList>
                <CommandEmpty>No results.</CommandEmpty>
                <CommandGroup heading="Components">
                  <CommandItem>Button</CommandItem>
                  <CommandItem>Card</CommandItem>
                  <CommandItem>Input</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Pages">
                  <CommandItem>Docs</CommandItem>
                  <CommandItem>Playground</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </Section>

          {/* Drawer */}
          <Section title="Drawer">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Drawer title</DrawerTitle>
                  <DrawerDescription>Swipe down or click outside to close.</DrawerDescription>
                </DrawerHeader>
                <div className="px-4 pb-2 flex flex-col gap-3">
                  <p className="text-sm text-muted-foreground">Drawer content goes here.</p>
                  <Button>Action</Button>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
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

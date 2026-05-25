export const componentUsage: Record<string, { title: string; code: string }[]> = {
  button: [
    {
      title: 'Variants',
      code: `import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}`,
    },
    {
      title: 'Sizes',
      code: `import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`,
    },
    {
      title: 'As link (asChild)',
      code: `import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <Button asChild>
      <Link href="/docs">Read the docs</Link>
    </Button>
  )
}`,
    },
  ],

  card: [
    {
      title: 'Basic',
      code: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Project setup</CardTitle>
        <CardDescription>Deploy your app in one click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Connect your repository and configure build settings.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>Deploy</Button>
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  )
}`,
    },
  ],

  input: [
    {
      title: 'With label',
      code: `import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Example() {
  return (
    <div className="flex flex-col gap-1.5 w-80">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  )
}`,
    },
    {
      title: 'Controlled',
      code: `'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Example() {
  const [value, setValue] = useState('')

  return (
    <div className="flex flex-col gap-1.5 w-80">
      <Label htmlFor="search">Search</Label>
      <Input
        id="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type to search…"
      />
      <p className="text-xs text-muted-foreground">{value.length} chars</p>
    </div>
  )
}`,
    },
  ],

  label: [
    {
      title: 'With input',
      code: `import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function Example() {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="name">Full name</Label>
      <Input id="name" placeholder="John Doe" />
    </div>
  )
}`,
    },
    {
      title: 'With checkbox',
      code: `import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}`,
    },
  ],

  badge: [
    {
      title: 'Variants',
      code: `import { Badge } from '@/components/ui/badge'

export function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="pill">Pill</Badge>
    </div>
  )
}`,
    },
  ],

  checkbox: [
    {
      title: 'With label',
      code: `'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="newsletter" />
      <Label htmlFor="newsletter">Subscribe to newsletter</Label>
    </div>
  )
}`,
    },
    {
      title: 'Controlled',
      code: `'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function Example() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id="agree"
        checked={checked}
        onCheckedChange={(v) => setChecked(Boolean(v))}
      />
      <Label htmlFor="agree">
        {checked ? 'Agreed ✓' : 'I agree to the terms'}
      </Label>
    </div>
  )
}`,
    },
  ],

  select: [
    {
      title: 'Basic',
      code: `import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'

export function Example() {
  return (
    <div className="flex flex-col gap-1.5 w-56">
      <Label>Framework</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select one" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="vite">Vite + React</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}`,
    },
    {
      title: 'Controlled',
      code: `'use client'

import { useState } from 'react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

export function Example() {
  const [value, setValue] = useState('')

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Pick a role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="editor">Editor</SelectItem>
        <SelectItem value="viewer">Viewer</SelectItem>
      </SelectContent>
    </Select>
  )
}`,
    },
  ],

  dialog: [
    {
      title: 'Basic',
      code: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@etchkit" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
    },
  ],

  alert: [
    {
      title: 'Default',
      code: `import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Info } from 'lucide-react'

export function Example() {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        You can copy-paste components directly into your project.
      </AlertDescription>
    </Alert>
  )
}`,
    },
    {
      title: 'Destructive',
      code: `import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

export function Example() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please sign in again.
      </AlertDescription>
    </Alert>
  )
}`,
    },
  ],

  tabs: [
    {
      title: 'Basic',
      code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export function Example() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">
          Manage your account settings here.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">
          Change your password here.
        </p>
      </TabsContent>
      <TabsContent value="billing">
        <p className="text-sm text-muted-foreground">
          Manage your billing here.
        </p>
      </TabsContent>
    </Tabs>
  )
}`,
    },
  ],

  switch: [
    {
      title: 'With label',
      code: `import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export function Example() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  )
}`,
    },
    {
      title: 'Controlled',
      code: `'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex items-center gap-3">
      <Switch
        id="dark-mode"
        checked={enabled}
        onCheckedChange={setEnabled}
      />
      <Label htmlFor="dark-mode">
        {enabled ? 'Dark mode on' : 'Dark mode off'}
      </Label>
    </div>
  )
}`,
    },
  ],

  tooltip: [
    {
      title: 'Basic',
      code: `import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`,
    },
  ],

  separator: [
    {
      title: 'Horizontal',
      code: `import { Separator } from '@/components/ui/separator'

export function Example() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">Section one</p>
      <Separator />
      <p className="text-sm">Section two</p>
    </div>
  )
}`,
    },
    {
      title: 'Vertical',
      code: `import { Separator } from '@/components/ui/separator'

export function Example() {
  return (
    <div className="flex items-center gap-4 h-8">
      <span className="text-sm">Blog</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Docs</span>
      <Separator orientation="vertical" />
      <span className="text-sm">GitHub</span>
    </div>
  )
}`,
    },
  ],

  avatar: [
    {
      title: 'With image and fallback',
      code: `import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export function Example() {
  return (
    <div className="flex gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>EK</AvatarFallback>
      </Avatar>
    </div>
  )
}`,
    },
    {
      title: 'Circular variant',
      code: `import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export function Example() {
  return (
    <Avatar className="rounded-full">
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  )
}`,
    },
  ],

  textarea: [
    {
      title: 'With label',
      code: `import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function Example() {
  return (
    <div className="flex flex-col gap-1.5 w-80">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself…" />
    </div>
  )
}`,
    },
    {
      title: 'Controlled',
      code: `'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'

export function Example() {
  const [value, setValue] = useState('')

  return (
    <div className="flex flex-col gap-1.5 w-80">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write something…"
      />
      <p className="text-xs text-muted-foreground">{value.length} / 500</p>
    </div>
  )
}`,
    },
  ],

  accordion: [
    {
      title: 'Single',
      code: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export function Example() {
  return (
    <Accordion type="single" collapsible className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is etchkit?</AccordionTrigger>
        <AccordionContent>
          A copy-paste component library. No shadows, no softness, just structure.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do I need Tailwind?</AccordionTrigger>
        <AccordionContent>
          Yes. etchkit is built on Tailwind CSS v4.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I customize components?</AccordionTrigger>
        <AccordionContent>
          You own the code — edit anything after adding it.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    },
    {
      title: 'Multiple open',
      code: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export function Example() {
  return (
    <Accordion type="multiple" className="w-80">
      <AccordionItem value="a">
        <AccordionTrigger>Section A</AccordionTrigger>
        <AccordionContent>Content for section A.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Section B</AccordionTrigger>
        <AccordionContent>Content for section B.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    },
  ],

  popover: [
    {
      title: 'Basic',
      code: `import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm text-muted-foreground">
          Popover content goes here.
        </p>
      </PopoverContent>
    </Popover>
  )
}`,
    },
  ],

  'dropdown-menu': [
    {
      title: 'Basic',
      code: `import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
    },
    {
      title: 'With checkbox items',
      code: `'use client'

import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export function Example() {
  const [statusBar, setStatusBar] = useState(true)
  const [activityBar, setActivityBar] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">View</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Toggle panels</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={statusBar} onCheckedChange={setStatusBar}>
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={activityBar} onCheckedChange={setActivityBar}>
          Activity Bar
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
    },
  ],

  'radio-group': [
    {
      title: 'Basic',
      code: `import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export function Example() {
  return (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="r1" />
        <Label htmlFor="r1">Option one</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="r2" />
        <Label htmlFor="r2">Option two</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="r3" />
        <Label htmlFor="r3">Option three</Label>
      </div>
    </RadioGroup>
  )
}`,
    },
  ],

  progress: [
    {
      title: 'Static',
      code: `import { Progress } from '@/components/ui/progress'

export function Example() {
  return (
    <div className="w-80 flex flex-col gap-4">
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  )
}`,
    },
    {
      title: 'Animated',
      code: `'use client'

import { useEffect, useState } from 'react'
import { Progress } from '@/components/ui/progress'

export function Example() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setProgress(72), 500)
    return () => clearTimeout(t)
  }, [])

  return <Progress value={progress} className="w-80" />
}`,
    },
  ],

  slider: [
    {
      title: 'Basic',
      code: `import { Slider } from '@/components/ui/slider'

export function Example() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-64" />
}`,
    },
    {
      title: 'Controlled',
      code: `'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'

export function Example() {
  const [value, setValue] = useState([25])

  return (
    <div className="flex flex-col gap-3 w-64">
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
      <p className="text-xs text-muted-foreground font-mono">{value[0]}%</p>
    </div>
  )
}`,
    },
  ],

  toggle: [
    {
      title: 'Variants',
      code: `import { Toggle } from '@/components/ui/toggle'
import { Bold, Italic, Underline } from 'lucide-react'

export function Example() {
  return (
    <div className="flex gap-2">
      <Toggle aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>
      <Toggle variant="outline" aria-label="Italic"><Italic className="h-4 w-4" /></Toggle>
      <Toggle aria-label="Underline" defaultPressed><Underline className="h-4 w-4" /></Toggle>
    </div>
  )
}`,
    },
  ],

  'toggle-group': [
    {
      title: 'Text formatting',
      code: `import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Italic, Underline } from 'lucide-react'

export function Example() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`,
    },
    {
      title: 'Single select',
      code: `import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function Example() {
  return (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  )
}`,
    },
  ],

  skeleton: [
    {
      title: 'Card skeleton',
      code: `import { Skeleton } from '@/components/ui/skeleton'

export function Example() {
  return (
    <div className="flex flex-col gap-3 w-64">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}`,
    },
    {
      title: 'List skeleton',
      code: `import { Skeleton } from '@/components/ui/skeleton'
import { Avatar } from '@/components/ui/avatar'

export function Example() {
  return (
    <div className="flex flex-col gap-4 w-64">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 shrink-0" />
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  )
}`,
    },
  ],

  table: [
    {
      title: 'Basic',
      code: `import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table'

const invoices = [
  { id: 'INV-001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { id: 'INV-002', status: 'Pending', method: 'Bank Transfer', amount: '$150.00' },
  { id: 'INV-003', status: 'Unpaid', method: 'PayPal', amount: '$350.00' },
]

export function Example() {
  return (
    <Table>
      <TableCaption>Recent invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-mono">{inv.id}</TableCell>
            <TableCell>{inv.status}</TableCell>
            <TableCell>{inv.method}</TableCell>
            <TableCell className="text-right font-mono">{inv.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`,
    },
  ],

  collapsible: [
    {
      title: 'Basic',
      code: `'use client'

import { useState } from 'react'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { ChevronsUpDown } from 'lucide-react'

export function Example() {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-64">
      <div className="flex items-center justify-between border-2 border-foreground px-3 py-2">
        <span className="text-sm font-medium">Repositories (3)</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0 h-auto border-0">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="border-2 border-t-0 border-foreground px-3 py-2 text-sm">
        etchkit
      </div>
      <CollapsibleContent>
        <div className="border-2 border-t-0 border-foreground px-3 py-2 text-sm text-muted-foreground">
          etchkit-docs
        </div>
        <div className="border-2 border-t-0 border-foreground px-3 py-2 text-sm text-muted-foreground">
          etchkit-templates
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`,
    },
  ],

  breadcrumb: [
    {
      title: 'Basic',
      code: `import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="/docs">Docs</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Button</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
    },
  ],

  pagination: [
    {
      title: 'Basic',
      code: `import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis,
} from '@/components/ui/pagination'

export function Example() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
    },
  ],

  sheet: [
    {
      title: 'Basic',
      code: `import {
  Sheet, SheetTrigger, SheetContent, SheetHeader,
  SheetTitle, SheetDescription, SheetFooter, SheetClose,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
    },
  ],

  'hover-card': [
    {
      title: 'Basic',
      code: `import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">@etchkit</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm font-medium">etchkit</p>
        <p className="text-xs text-muted-foreground">No shadows. No softness. Just structure.</p>
      </HoverCardContent>
    </HoverCard>
  )
}`,
    },
  ],

  'context-menu': [
    {
      title: 'Basic',
      code: `import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent,
  ContextMenuItem, ContextMenuLabel, ContextMenuSeparator,
} from '@/components/ui/context-menu'

export function Example() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-48 items-center justify-center border-2 border-dashed border-foreground text-xs text-muted-foreground">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
    },
  ],

  menubar: [
    {
      title: 'Basic',
      code: `import {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent,
  MenubarItem, MenubarSeparator,
} from '@/components/ui/menubar'

export function Example() {
  return (
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
    </Menubar>
  )
}`,
    },
  ],

  'scroll-area': [
    {
      title: 'Basic',
      code: `import { ScrollArea } from '@/components/ui/scroll-area'

export function Example() {
  return (
    <ScrollArea className="h-48 w-48 border-2 border-foreground">
      <div className="p-4">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="text-sm py-1 border-b border-foreground/20">{i + 1}. List item</p>
        ))}
      </div>
    </ScrollArea>
  )
}`,
    },
  ],

  sonner: [
    {
      title: 'Toast variants',
      code: `'use client'

import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export function Example() {
  return (
    <div className="flex gap-2">
      <Button onClick={() => toast('Event created', { description: 'Saved.' })}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success('Saved!')}>
        Success
      </Button>
      <Button variant="destructive" onClick={() => toast.error('Failed!')}>
        Error
      </Button>
    </div>
  )
}`,
    },
  ],

  'navigation-menu': [
    {
      title: 'Basic',
      code: `import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function Example() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[300px]">
              <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                Introduction
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                Installation
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Components
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
    },
  ],

  form: [
    {
      title: 'With zod validation',
      code: `'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export function Example() {
  const form = useForm({ resolver: zodResolver(schema) })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)} className="flex flex-col gap-4 w-80">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Min 8 chars" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`,
    },
  ],

  command: [
    {
      title: 'Basic',
      code: `import {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandSeparator,
} from '@/components/ui/command'

export function Example() {
  return (
    <Command className="border-2 border-foreground w-72">
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
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
  )
}`,
    },
  ],

  drawer: [
    {
      title: 'Basic',
      code: `import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader,
  DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
          <DrawerDescription>Swipe down or click outside to close.</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <p className="text-sm text-muted-foreground">Drawer content goes here.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
    },
  ],

  'alert-dialog': [
    {
      title: 'Destructive confirmation',
      code: `import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader,
  AlertDialogFooter, AlertDialogTitle, AlertDialogDescription,
  AlertDialogAction, AlertDialogCancel,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete account</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
    },
  ],

  'aspect-ratio': [
    {
      title: 'Video embed',
      code: `import { AspectRatio } from '@/components/ui/aspect-ratio'

export function Example() {
  return (
    <div className="w-80">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
          alt="Photo"
          className="h-full w-full object-cover border-2 border-foreground"
        />
      </AspectRatio>
    </div>
  )
}`,
    },
  ],

  calendar: [
    {
      title: 'Single date',
      code: `'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

export function Example() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  )
}`,
    },
  ],

  carousel: [
    {
      title: 'Basic',
      code: `import {
  Carousel, CarouselContent, CarouselItem,
  CarouselPrevious, CarouselNext,
} from '@/components/ui/carousel'

export function Example() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((i) => (
          <CarouselItem key={i}>
            <div className="border-2 border-foreground p-10 flex items-center justify-center">
              <span className="text-2xl font-bold font-mono">{i}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`,
    },
  ],

  chart: [
    {
      title: 'Bar chart',
      code: `'use client'

import { Bar, BarChart } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'

const data = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
]

const config: ChartConfig = {
  revenue: { label: 'Revenue', color: 'hsl(var(--foreground))' },
}

export function Example() {
  return (
    <ChartContainer config={config} className="h-48 w-full">
      <BarChart data={data}>
        <Bar dataKey="revenue" fill="var(--color-revenue)" />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  )
}`,
    },
  ],

  'copy-button': [
    {
      title: 'Basic',
      code: `import { CopyButton } from '@/components/ui/copy-button'

export function Example() {
  return (
    <div className="flex items-center gap-3">
      <code className="text-sm font-mono bg-muted px-2 py-1">npx @etchkit/cli@latest add button</code>
      <CopyButton value="npx @etchkit/cli@latest add button" />
    </div>
  )
}`,
    },
  ],

  'empty-state': [
    {
      title: 'With action',
      code: `import { EmptyState } from '@/components/ui/empty-state'
import { Button } from '@/components/ui/button'
import { Inbox } from 'lucide-react'

export function Example() {
  return (
    <EmptyState
      icon={<Inbox className="h-6 w-6" />}
      title="No results"
      description="No components match your current filter. Try adjusting your search."
      action={<Button size="sm" variant="outline">Clear filters</Button>}
    />
  )
}`,
    },
  ],

  'input-otp': [
    {
      title: 'Basic',
      code: `import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

export function Example() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  )
}`,
    },
  ],

  kbd: [
    {
      title: 'Shortcuts',
      code: `import { Kbd } from '@/components/ui/kbd'

export function Example() {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex items-center gap-4">
        <span className="text-muted-foreground w-32">Command palette</span>
        <div className="flex items-center gap-1"><Kbd>⌘</Kbd><Kbd>K</Kbd></div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-muted-foreground w-32">Command menu</span>
        <div className="flex items-center gap-1"><Kbd>Ctrl</Kbd><Kbd>Shift</Kbd><Kbd>P</Kbd></div>
      </div>
    </div>
  )
}`,
    },
  ],

  'number-input': [
    {
      title: 'With min/max',
      code: `'use client'

import { useState } from 'react'
import { NumberInput } from '@/components/ui/number-input'
import { Label } from '@/components/ui/label'

export function Example() {
  const [qty, setQty] = useState(1)

  return (
    <div className="flex flex-col gap-1.5">
      <Label>Quantity</Label>
      <NumberInput value={qty} onChange={setQty} min={1} max={99} />
    </div>
  )
}`,
    },
  ],

  resizable: [
    {
      title: 'Horizontal panels',
      code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable'

export function Example() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-40 max-w-md border-2 border-foreground">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Panel 1
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Panel 2
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
    },
  ],

  sidebar: [
    {
      title: 'Basic layout',
      code: `import {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent,
  SidebarGroup, SidebarGroupLabel, SidebarMenuItem, SidebarMenuButton,
} from '@/components/ui/sidebar'
import { LayoutDashboard, Settings, Users } from 'lucide-react'

export function Example() {
  return (
    <SidebarProvider>
      <div className="flex h-64 border-2 border-foreground overflow-hidden">
        <Sidebar>
          <SidebarHeader>
            <p className="text-xs font-medium uppercase tracking-widest">App</p>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users className="h-4 w-4" />
                  <span>Users</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6">
          <p className="text-sm text-muted-foreground">Main content area</p>
        </main>
      </div>
    </SidebarProvider>
  )
}`,
    },
  ],

  stepper: [
    {
      title: 'Horizontal',
      code: `import { Stepper } from '@/components/ui/stepper'

const steps = [
  { title: 'Account', description: 'Create your account' },
  { title: 'Details', description: 'Fill in your details' },
  { title: 'Review', description: 'Confirm and submit' },
]

export function Example() {
  return <Stepper steps={steps} currentStep={1} />
}`,
    },
    {
      title: 'Vertical',
      code: `import { Stepper } from '@/components/ui/stepper'

const steps = [
  { title: 'Account' },
  { title: 'Payment' },
  { title: 'Confirm' },
]

export function Example() {
  return <Stepper steps={steps} currentStep={2} orientation="vertical" />
}`,
    },
  ],

  timeline: [
    {
      title: 'Basic',
      code: `import {
  Timeline, TimelineItem, TimelineConnector, TimelineDot,
  TimelineContent, TimelineTitle, TimelineDescription, TimelineTime,
} from '@/components/ui/timeline'

export function Example() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineConnector><TimelineDot /></TimelineConnector>
        <TimelineContent>
          <TimelineTitle>Project started</TimelineTitle>
          <TimelineDescription>Monorepo scaffolded with Turborepo.</TimelineDescription>
          <TimelineTime>Jan 2025</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector><TimelineDot /></TimelineConnector>
        <TimelineContent>
          <TimelineTitle>v0.0.1 shipped</TimelineTitle>
          <TimelineDescription>38 components published to npm.</TimelineDescription>
          <TimelineTime>Mar 2025</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector><TimelineDot /></TimelineConnector>
        <TimelineContent>
          <TimelineTitle>v0.0.2 — Phase 4</TimelineTitle>
          <TimelineDescription>14 more components. Now at 52.</TimelineDescription>
          <TimelineTime>May 2025</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}`,
    },
  ],
}

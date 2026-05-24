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
}

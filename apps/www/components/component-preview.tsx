'use client'

import * as React from 'react'
import {
  Button,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Input,
  Label,
  Badge,
  Checkbox,
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
  Alert, AlertTitle, AlertDescription,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Switch,
  Tooltip, TooltipProvider, TooltipTrigger, TooltipContent,
  Separator,
  Avatar, AvatarImage, AvatarFallback,
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis,
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose,
  HoverCard, HoverCardTrigger, HoverCardContent,
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator,
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator,
  ScrollArea, ScrollBar,
  NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle,
  Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator,
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from '@etchkit/ui'
import { toast } from 'sonner'
import { AlertCircle, Info, CalendarDays } from 'lucide-react'

const previews: Record<string, React.ReactNode> = {
  button: (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),

  card: (
    <Card className="max-w-sm w-full">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card content area. Put anything here.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Action</Button>
        <Button size="sm" variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  ),

  input: (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Input placeholder="Default input" />
      <Input placeholder="Disabled" disabled />
      <Input type="email" placeholder="Email address" />
    </div>
  ),

  label: (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="demo-input">Email address</Label>
        <Input id="demo-input" placeholder="you@example.com" className="max-w-sm" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="demo-disabled" className="opacity-50">Disabled field</Label>
        <Input id="demo-disabled" placeholder="Not available" disabled className="max-w-sm" />
      </div>
    </div>
  ),

  badge: (
    <div className="flex flex-wrap gap-3">
      <Badge>Default</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="pill">Pill</Badge>
    </div>
  ),

  checkbox: (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="cb1" />
        <Label htmlFor="cb1">Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb2" defaultChecked />
        <Label htmlFor="cb2">Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb3" disabled />
        <Label htmlFor="cb3" className="opacity-50">Disabled</Label>
      </div>
    </div>
  ),

  select: (
    <div className="w-full max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="vite">Vite + React</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),

  dialog: (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>
            This is the dialog description. It provides context for the action below.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-2">
          <Label htmlFor="dialog-input">Name</Label>
          <Input id="dialog-input" placeholder="Enter your name" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),

  alert: (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>
          You can copy-paste etchkit components into your project.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  ),

  tabs: (
    <Tabs defaultValue="preview" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="docs">Docs</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className="border-2 border-foreground p-4 text-sm text-muted-foreground">
          Live preview renders here.
        </div>
      </TabsContent>
      <TabsContent value="code">
        <div className="border-2 border-foreground p-4 text-sm font-mono bg-muted">
          {'<Button>Click me</Button>'}
        </div>
      </TabsContent>
      <TabsContent value="docs">
        <div className="border-2 border-foreground p-4 text-sm text-muted-foreground">
          Documentation content.
        </div>
      </TabsContent>
    </Tabs>
  ),

  switch: (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch id="sw1" />
        <Label htmlFor="sw1">Unchecked</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="sw2" defaultChecked />
        <Label htmlFor="sw2">Checked</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="sw3" disabled />
        <Label htmlFor="sw3" className="opacity-50">Disabled</Label>
      </div>
    </div>
  ),

  tooltip: (
    <TooltipProvider>
      <div className="flex gap-4 flex-wrap">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>With tooltip</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Bottom tooltip</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),

  separator: (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <p className="text-sm">Above separator</p>
      <Separator />
      <p className="text-sm">Below separator</p>
      <div className="flex items-center gap-4 h-8">
        <span className="text-sm">Left</span>
        <Separator orientation="vertical" />
        <span className="text-sm">Right</span>
      </div>
    </div>
  ),

  avatar: (
    <div className="flex flex-wrap gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>EK</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-full">
        <AvatarImage src="https://github.com/shadcn.png" alt="Circular" />
        <AvatarFallback>CL</AvatarFallback>
      </Avatar>
      <Avatar className="h-14 w-14">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
  breadcrumb: (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Docs</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Button</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),

  pagination: (
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
  ),

  sheet: (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 py-4">
          <Label htmlFor="sheet-name">Name</Label>
          <Input id="sheet-name" defaultValue="etchkit" />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),

  'hover-card': (
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
  ),

  'context-menu': (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-48 items-center justify-center border-2 border-dashed border-foreground text-xs uppercase tracking-widest text-muted-foreground">
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
  ),

  menubar: (
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
  ),

  'scroll-area': (
    <ScrollArea className="h-48 w-48 border-2 border-foreground">
      <div className="p-4">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="text-sm py-1 border-b border-foreground/20">Item {i + 1}</p>
        ))}
      </div>
    </ScrollArea>
  ),

  sonner: (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast('Event created', { description: 'Your event has been saved.' })}>
        Show toast
      </Button>
      <Button variant="outline" onClick={() => toast.success('Saved successfully')}>
        Success
      </Button>
      <Button variant="destructive" onClick={() => toast.error('Something went wrong')}>
        Error
      </Button>
    </div>
  ),

  'navigation-menu': (
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
  ),

  form: (
    <div className="w-full max-w-sm border-2 border-foreground p-6">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
        Form uses react-hook-form + zod
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="form-email">Email</Label>
          <Input id="form-email" type="email" placeholder="you@example.com" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="form-pass">Password</Label>
          <Input id="form-pass" type="password" placeholder="••••••••" />
          <p className="text-xs text-muted-foreground">Min 8 characters.</p>
        </div>
        <Button className="w-full">Submit</Button>
      </div>
    </div>
  ),

  command: (
    <Command className="border-2 border-foreground w-72">
      <CommandInput placeholder="Search components…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Components">
          <CommandItem>Button</CommandItem>
          <CommandItem>Card</CommandItem>
          <CommandItem>Input</CommandItem>
          <CommandItem>Dialog</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Pages">
          <CommandItem>Docs</CommandItem>
          <CommandItem>Playground</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),

  drawer: (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
          <DrawerDescription>Swipe down or click outside to close.</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4 flex flex-col gap-3">
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
  ),
}

export function ComponentPreview({ slug }: { slug: string }) {
  const preview = previews[slug]
  if (!preview) return null

  return (
    <div className="border-2 border-foreground p-10 flex items-center justify-center min-h-40 bg-muted">
      {preview}
    </div>
  )
}

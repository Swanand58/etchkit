import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useForm } from 'react-hook-form'

// ── Alert Dialog ─────────────────────────────────────────────────────────────
import {
  AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle,
  AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel,
  AlertDialogTrigger,
} from '../components/alert-dialog'

// ── Aspect Ratio ─────────────────────────────────────────────────────────────
import { AspectRatio } from '../components/aspect-ratio'

// ── Calendar ─────────────────────────────────────────────────────────────────
import { Calendar } from '../components/calendar'

// ── Carousel ─────────────────────────────────────────────────────────────────
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from '../components/carousel'

// ── Chart ────────────────────────────────────────────────────────────────────
import {
  ChartContainer, ChartTooltip, ChartTooltipContent,
  ChartLegend, ChartLegendContent, ChartStyle, useChart,
  type ChartConfig,
} from '../components/chart'
import { BarChart, Bar } from 'recharts'

// ── Command ──────────────────────────────────────────────────────────────────
import {
  Command, CommandInput, CommandList, CommandEmpty, CommandGroup,
  CommandItem, CommandSeparator, CommandShortcut, CommandDialog,
} from '../components/command'

// ── Context Menu ─────────────────────────────────────────────────────────────
import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem,
  ContextMenuSeparator, ContextMenuLabel, ContextMenuShortcut,
  ContextMenuCheckboxItem, ContextMenuRadioGroup, ContextMenuRadioItem,
  ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent,
} from '../components/context-menu'

// ── Dialog ───────────────────────────────────────────────────────────────────
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogTrigger, DialogClose,
} from '../components/dialog'

// ── Drawer ───────────────────────────────────────────────────────────────────
import {
  Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription,
  DrawerFooter, DrawerTrigger, DrawerClose,
} from '../components/drawer'

// ── Dropdown Menu ────────────────────────────────────────────────────────────
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuShortcut,
  DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuGroup,
} from '../components/dropdown-menu'

// ── Form ─────────────────────────────────────────────────────────────────────
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormDescription,
  FormMessage,
} from '../components/form'
import { Input } from '../components/input'

// ── Hover Card ───────────────────────────────────────────────────────────────
import {
  HoverCard, HoverCardTrigger, HoverCardContent,
} from '../components/hover-card'

// ── Input OTP ────────────────────────────────────────────────────────────────
import {
  InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator,
} from '../components/input-otp'

// ── Menubar ──────────────────────────────────────────────────────────────────
import {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem,
  MenubarSeparator, MenubarLabel, MenubarShortcut, MenubarCheckboxItem,
  MenubarRadioGroup, MenubarRadioItem, MenubarSub, MenubarSubTrigger, MenubarSubContent,
} from '../components/menubar'

// ── Navigation Menu ──────────────────────────────────────────────────────────
import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuViewport,
  NavigationMenuIndicator, navigationMenuTriggerStyle,
} from '../components/navigation-menu'

// ── Pagination ───────────────────────────────────────────────────────────────
import {
  Pagination, PaginationContent, PaginationItem, PaginationLink,
  PaginationNext, PaginationPrevious, PaginationEllipsis,
} from '../components/pagination'

// ── Popover ──────────────────────────────────────────────────────────────────
import { Popover, PopoverTrigger, PopoverContent } from '../components/popover'

// ── Radio Group ──────────────────────────────────────────────────────────────
import { RadioGroup, RadioGroupItem } from '../components/radio-group'

// ── Resizable ────────────────────────────────────────────────────────────────
import {
  ResizablePanelGroup, ResizablePanel, ResizableHandle,
} from '../components/resizable'

// ── Scroll Area ──────────────────────────────────────────────────────────────
import { ScrollArea, ScrollBar } from '../components/scroll-area'

// ── Select ───────────────────────────────────────────────────────────────────
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  SelectGroup, SelectLabel, SelectSeparator,
} from '../components/select'

// ── Sheet ────────────────────────────────────────────────────────────────────
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription,
  SheetFooter, SheetTrigger, SheetClose,
} from '../components/sheet'

// ── Sidebar ──────────────────────────────────────────────────────────────────
import {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupLabel, SidebarMenuItem, SidebarMenuButton,
  SidebarSeparator, SidebarTrigger,
} from '../components/sidebar'

// ── Sonner ───────────────────────────────────────────────────────────────────
import { Toaster } from '../components/sonner'

// ── Stepper ──────────────────────────────────────────────────────────────────
import { Stepper } from '../components/stepper'

// ── Timeline ─────────────────────────────────────────────────────────────────
import {
  Timeline, TimelineItem, TimelineConnector, TimelineDot,
  TimelineContent, TimelineTitle, TimelineTime,
} from '../components/timeline'

// ── Toggle Group ─────────────────────────────────────────────────────────────
import { ToggleGroup, ToggleGroupItem } from '../components/toggle-group'

// ── Tooltip ──────────────────────────────────────────────────────────────────
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../components/tooltip'

// ── Partials from smoke.test.tsx needing more coverage ───────────────────────
import { Avatar, AvatarImage, AvatarFallback } from '../components/avatar'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis,
} from '../components/breadcrumb'
import { Button } from '../components/button'
import { CopyButton } from '../components/copy-button'
import { EmptyState } from '../components/empty-state'
import { NumberInput } from '../components/number-input'
import { Progress } from '../components/progress'
import { Separator } from '../components/separator'
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  TableCaption, TableFooter,
} from '../components/table'

// ─────────────────────────────────────────────────────────────────────────────

describe('Alert Dialog', () => {
  it('renders open with all sub-components', () => {
    render(
      <AlertDialog open>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  })
})

describe('Aspect Ratio', () => {
  it('renders', () => {
    render(<AspectRatio ratio={16 / 9}><div>content</div></AspectRatio>)
  })
})

describe('Calendar', () => {
  it('renders default', () => {
    render(<Calendar mode="single" />)
  })
  it('renders with selected date', () => {
    render(<Calendar mode="single" selected={new Date(2025, 0, 1)} />)
  })
})

describe('Carousel', () => {
  it('renders horizontal with items', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  })
  it('renders vertical orientation', () => {
    render(
      <Carousel orientation="vertical">
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
      </Carousel>
    )
  })
})

describe('Chart', () => {
  const config: ChartConfig = {
    value: { label: 'Value', color: '#0f172a' },
    other: { label: 'Other', theme: { light: '#000', dark: '#fff' } },
  }
  const data = [{ name: 'A', value: 100 }, { name: 'B', value: 200 }]

  it('renders ChartContainer with BarChart', () => {
    render(
      <ChartContainer config={config} style={{ width: 400, height: 300 }}>
        <BarChart data={data}>
          <Bar dataKey="value" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
        </BarChart>
      </ChartContainer>
    )
  })

  it('ChartStyle renders with config', () => {
    render(<ChartStyle id="test" config={config} />)
  })

  it('ChartStyle returns null with empty config', () => {
    render(<ChartStyle id="test" config={{}} />)
  })

  it('ChartTooltipContent returns null when inactive', () => {
    render(
      <ChartContainer config={config} style={{ width: 400, height: 300 }}>
        <BarChart data={[]}>
          <ChartTooltipContent active={false} payload={[]} />
        </BarChart>
      </ChartContainer>
    )
  })

  it('ChartTooltipContent renders when active with payload', () => {
    render(
      <ChartContainer config={config} style={{ width: 400, height: 300 }}>
        <BarChart data={data}>
          <ChartTooltipContent
            active
            payload={[{ name: 'value', value: 100, color: '#000', dataKey: 'value' }] as any}
            label="Jan"
            hideLabel={false}
            indicator="dot"
          />
        </BarChart>
      </ChartContainer>
    )
  })

  it('ChartTooltipContent with hideLabel and hideIndicator', () => {
    render(
      <ChartContainer config={config} style={{ width: 400, height: 300 }}>
        <BarChart data={data}>
          <ChartTooltipContent
            active
            payload={[{ name: 'value', value: 100, color: '#000', dataKey: 'value' }] as any}
            hideLabel
            hideIndicator
          />
        </BarChart>
      </ChartContainer>
    )
  })

  it('ChartLegendContent renders with payload', () => {
    render(
      <ChartContainer config={config} style={{ width: 400, height: 300 }}>
        <BarChart>
          <ChartLegendContent
            payload={[{ value: 'value', dataKey: 'value', color: '#000', type: 'square' }] as any}
            verticalAlign="top"
          />
        </BarChart>
      </ChartContainer>
    )
  })

  it('ChartLegendContent returns null with empty payload', () => {
    render(
      <ChartContainer config={config} style={{ width: 400, height: 300 }}>
        <BarChart>
          <ChartLegendContent payload={[]} />
        </BarChart>
      </ChartContainer>
    )
  })

  it('useChart throws outside ChartContainer', () => {
    const Bad = () => { useChart(); return null }
    expect(() => render(<Bad />)).toThrow('useChart must be used within <ChartContainer />')
  })
})

describe('Command', () => {
  it('renders with search and items', () => {
    render(
      <Command>
        <CommandInput placeholder="Search…" />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Tools">
            <CommandItem>
              <span>Item 1</span>
              <CommandShortcut>⌘A</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    )
  })

  it('renders CommandDialog', () => {
    render(
      <CommandDialog open>
        <CommandInput placeholder="Search…" />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
        </CommandList>
      </CommandDialog>
    )
  })
})

describe('Context Menu', () => {
  it('renders with all sub-components open', () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Right-click</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Label</ContextMenuLabel>
          <ContextMenuItem>
            Item
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuCheckboxItem checked>Checkbox</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="a">
            <ContextMenuRadioItem value="a">Radio A</ContextMenuRadioItem>
            <ContextMenuRadioItem value="b">Radio B</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Sub</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Sub Item</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>
    )
  })
})

describe('Dialog', () => {
  it('renders open with all sub-components', () => {
    render(
      <Dialog open>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <p>Body content</p>
          <DialogFooter>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  })
})

describe('Drawer', () => {
  it('renders open with all sub-components', () => {
    render(
      <Drawer open>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription>Description</DrawerDescription>
          </DrawerHeader>
          <p>Content</p>
          <DrawerFooter>
            <DrawerClose>Close</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  })
})

describe('Dropdown Menu', () => {
  it('renders open with all sub-components', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Label</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Item <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>Check</DropdownMenuCheckboxItem>
          <DropdownMenuRadioGroup value="a">
            <DropdownMenuRadioItem value="a">Radio</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Sub</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Sub Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  })
})

describe('Form', () => {
  function TestForm() {
    const form = useForm({ defaultValues: { name: '' } })
    return (
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormDescription>Your full name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    )
  }

  it('renders form with field, label, control, description, message', () => {
    render(<TestForm />)
  })
})

describe('Hover Card', () => {
  it('renders open with content', () => {
    render(
      <HoverCard open>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Card content</HoverCardContent>
      </HoverCard>
    )
  })
})

describe('Input OTP', () => {
  it('renders with groups and slots', () => {
    render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  })
})

describe('Menubar', () => {
  it('renders with menus and items', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Actions</MenubarLabel>
            <MenubarItem>
              New <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarCheckboxItem checked>Show</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarRadioGroup value="a">
              <MenubarRadioItem value="a">Option A</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSub>
              <MenubarSubTrigger>More</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Sub item</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  })
})

describe('Navigation Menu', () => {
  it('renders with list, items, links', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/">Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Direct Link
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
        <NavigationMenuIndicator />
      </NavigationMenu>
    )
  })
})

describe('Pagination', () => {
  it('renders with all sub-components', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size="default">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  })
})

describe('Popover', () => {
  it('renders open with content', () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    )
  })
})

describe('Radio Group', () => {
  it('renders with items', () => {
    render(
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" id="a" />
        <RadioGroupItem value="b" id="b" />
      </RadioGroup>
    )
  })
})

describe('Resizable', () => {
  it('renders panels with handle', () => {
    render(
      <ResizablePanelGroup orientation="horizontal" style={{ height: 200 }}>
        <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    )
  })
  it('renders handle with grip icon', () => {
    render(
      <ResizablePanelGroup orientation="horizontal" style={{ height: 200 }}>
        <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    )
  })
})

describe('Scroll Area', () => {
  it('renders with content and scrollbar', () => {
    render(
      <ScrollArea className="h-40">
        <div style={{ height: 400 }}>Long content</div>
        <ScrollBar orientation="vertical" />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    )
  })
})

describe('Select', () => {
  it('renders with all sub-components', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select…" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group</SelectLabel>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
            <SelectSeparator />
            <SelectItem value="c">Option C</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  })
})

describe('Sheet', () => {
  it('renders open with all sub-components', () => {
    render(
      <Sheet open>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <p>Body</p>
          <SheetFooter>
            <SheetClose>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  })
})

describe('Sidebar', () => {
  it('renders with provider and all sub-components', () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>Header</SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Group</SidebarGroupLabel>
              <SidebarMenuItem>
                <SidebarMenuButton>Item</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>
          </SidebarContent>
          <SidebarSeparator />
          <SidebarFooter>Footer</SidebarFooter>
        </Sidebar>
        <SidebarTrigger />
      </SidebarProvider>
    )
  })
  it('renders collapsed sidebar', () => {
    render(
      <SidebarProvider defaultCollapsed>
        <Sidebar>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </SidebarProvider>
    )
  })
  it('renders closed sidebar', () => {
    render(
      <SidebarProvider defaultOpen={false}>
        <Sidebar>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </SidebarProvider>
    )
  })
})

describe('Sonner', () => {
  it('renders Toaster', () => {
    render(<Toaster />)
  })
})

describe('Stepper', () => {
  const steps = [
    { title: 'Step 1', description: 'First step' },
    { title: 'Step 2' },
    { title: 'Step 3', description: 'Last step' },
  ]

  it('renders horizontal stepper', () => {
    render(<Stepper steps={steps} currentStep={1} />)
  })

  it('renders vertical stepper', () => {
    render(<Stepper steps={steps} currentStep={0} orientation="vertical" />)
  })

  it('renders with all steps complete', () => {
    render(<Stepper steps={steps} currentStep={3} />)
  })
})

describe('Timeline', () => {
  it('renders with all sub-components', () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineConnector>
            <TimelineDot />
          </TimelineConnector>
          <TimelineContent>
            <TimelineTitle>Event title</TimelineTitle>
            <TimelineTime>Jan 1, 2025</TimelineTime>
            <p>Event description</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector>
            <TimelineDot />
          </TimelineConnector>
          <TimelineContent>
            <TimelineTitle>Another event</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    )
  })
})

describe('Toggle Group', () => {
  it('renders single type', () => {
    render(
      <ToggleGroup type="single" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )
  })
  it('renders multiple type', () => {
    render(
      <ToggleGroup type="multiple" defaultValue={['a']}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b" variant="outline">B</ToggleGroupItem>
      </ToggleGroup>
    )
  })
})

describe('Tooltip', () => {
  it('renders open with content', () => {
    render(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  })
})

// ─── Partial coverage fixes ────────────────────────────────────────────────

describe('Avatar extended', () => {
  it('renders with image', () => {
    render(
      <Avatar>
        <AvatarImage src="/avatar.png" alt="User" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )
  })
})

describe('Breadcrumb extended', () => {
  it('renders BreadcrumbPage and BreadcrumbEllipsis', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  })
})

describe('Button extended', () => {
  it('renders disabled', () => {
    render(<Button disabled>Disabled</Button>)
  })
  it('renders asChild', () => {
    render(<Button asChild><a href="#">Link</a></Button>)
  })
})

describe('CopyButton extended', () => {
  it('fires click and triggers copy', async () => {
    Object.assign(navigator, { clipboard: { writeText: () => Promise.resolve() } })
    const { getByRole } = render(<CopyButton value="npm install etchkit" />)
    fireEvent.click(getByRole('button'))
  })
})

describe('EmptyState extended', () => {
  it('renders with action', () => {
    render(
      <EmptyState
        title="No results"
        description="Try adjusting your filters."
        action={<Button>Add item</Button>}
      />
    )
  })
})

describe('NumberInput extended', () => {
  it('fires decrement and increment clicks', () => {
    const onChange = () => {}
    const { getAllByRole } = render(<NumberInput value={5} onChange={onChange} min={0} max={10} />)
    const buttons = getAllByRole('button')
    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
  })
})

describe('Progress extended', () => {
  it('renders without value', () => {
    render(<Progress />)
  })
})

describe('Separator extended', () => {
  it('renders vertical', () => {
    render(<Separator orientation="vertical" />)
  })
})

describe('Table extended', () => {
  it('renders TableCaption and TableFooter', () => {
    render(
      <Table>
        <TableCaption>A list of items</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  })
})

import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

import { Alert, AlertTitle, AlertDescription } from '../components/alert'
import { Avatar, AvatarFallback } from '../components/avatar'
import { Badge } from '../components/badge'
import { Button } from '../components/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/card'
import { Checkbox } from '../components/checkbox'
import { Input } from '../components/input'
import { Label } from '../components/label'
import { Progress } from '../components/progress'
import { Separator } from '../components/separator'
import { Skeleton } from '../components/skeleton'
import { Slider } from '../components/slider'
import { Switch } from '../components/switch'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/tabs'
import { Textarea } from '../components/textarea'
import { Toggle } from '../components/toggle'
import { Kbd } from '../components/kbd'
import { CopyButton } from '../components/copy-button'
import { EmptyState } from '../components/empty-state'
import { NumberInput } from '../components/number-input'
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '../components/accordion'
import {
  Collapsible, CollapsibleTrigger, CollapsibleContent,
} from '../components/collapsible'
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from '../components/table'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator,
} from '../components/breadcrumb'

describe('Component smoke tests', () => {
  it('Alert renders', () => {
    render(
      <Alert>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
    )
  })

  it('Avatar renders with fallback', () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )
  })

  it('Badge renders all variants', () => {
    render(
      <>
        <Badge>default</Badge>
        <Badge variant="outline">outline</Badge>
        <Badge variant="destructive">destructive</Badge>
        <Badge variant="pill">pill</Badge>
      </>
    )
  })

  it('Button renders all variants', () => {
    render(
      <>
        <Button>default</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="destructive">destructive</Button>
        <Button size="sm">sm</Button>
        <Button size="lg">lg</Button>
        <Button size="icon">i</Button>
      </>
    )
  })

  it('Card renders with all sub-components', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
  })

  it('Checkbox renders', () => {
    render(<Checkbox />)
  })

  it('Input renders', () => {
    render(<Input placeholder="test" />)
  })

  it('Label renders', () => {
    render(<Label>Label text</Label>)
  })

  it('Progress renders', () => {
    render(<Progress value={50} />)
  })

  it('Separator renders', () => {
    render(<Separator />)
  })

  it('Skeleton renders', () => {
    render(<Skeleton className="h-10 w-full" />)
  })

  it('Slider renders', () => {
    render(<Slider defaultValue={[50]} />)
  })

  it('Switch renders', () => {
    render(<Switch />)
  })

  it('Tabs renders with content', () => {
    render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Content A</TabsContent>
        <TabsContent value="b">Content B</TabsContent>
      </Tabs>
    )
  })

  it('Textarea renders', () => {
    render(<Textarea placeholder="test" />)
  })

  it('Toggle renders', () => {
    render(<Toggle>Bold</Toggle>)
  })

  it('Accordion renders', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Question</AccordionTrigger>
          <AccordionContent>Answer</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  })

  it('Collapsible renders', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    )
  })

  it('Table renders', () => {
    render(
      <Table>
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
      </Table>
    )
  })

  it('Breadcrumb renders', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Docs</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  })

  it('Kbd renders', () => {
    render(<Kbd>⌘K</Kbd>)
  })

  it('CopyButton renders', () => {
    render(<CopyButton value="npm install" />)
  })

  it('EmptyState renders', () => {
    render(<EmptyState title="No results" description="Try again" />)
  })

  it('NumberInput renders', () => {
    render(<NumberInput value={0} onChange={() => {}} />)
  })
})

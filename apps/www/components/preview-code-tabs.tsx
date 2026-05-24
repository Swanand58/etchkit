'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@etchkit/ui'
import { ComponentPreview } from './component-preview'
import { CodeBlock } from './code-block'

interface PreviewCodeTabsProps {
  slug: string
  source: string
}

export function PreviewCodeTabs({ slug, source }: PreviewCodeTabsProps) {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="source">Source</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <ComponentPreview slug={slug} />
      </TabsContent>
      <TabsContent value="source">
        <CodeBlock code={source} language="tsx" />
      </TabsContent>
    </Tabs>
  )
}

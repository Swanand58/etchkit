'use client'

import * as React from 'react'
import { Copy, Check } from 'lucide-react'

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = React.useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-3 border-2 border-foreground bg-muted px-4 py-2.5 text-sm font-mono hover:bg-foreground hover:text-background transition-colors group"
    >
      <span className="text-muted-foreground group-hover:text-background transition-colors">
        {command}
      </span>
      {copied ? (
        <Check className="h-4 w-4 shrink-0 text-foreground group-hover:text-background" />
      ) : (
        <Copy className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-background" />
      )}
    </button>
  )
}

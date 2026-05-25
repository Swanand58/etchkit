import * as React from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '../lib/utils'

interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  timeout?: number
}

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  ({ className, value, timeout = 2000, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)

    async function handleCopy() {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), timeout)
    }

    return (
      <button
        ref={ref}
        onClick={handleCopy}
        className={cn(
          'flex h-8 w-8 items-center justify-center border-2 border-foreground transition-colors hover:bg-foreground hover:text-background',
          copied && 'bg-foreground text-background',
          className
        )}
        aria-label={copied ? 'Copied' : 'Copy'}
        {...props}
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    )
  }
)
CopyButton.displayName = 'CopyButton'

export { CopyButton }

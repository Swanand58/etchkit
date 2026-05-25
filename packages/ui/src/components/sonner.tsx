import { Toaster as Sonner, type ToasterProps } from 'sonner'

function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          toast:
            'border-2 border-foreground bg-background text-foreground font-sans text-sm shadow-none',
          description: 'text-muted-foreground',
          actionButton: 'bg-foreground text-background text-xs uppercase tracking-widest px-3 py-1',
          cancelButton: 'border-2 border-foreground bg-background text-foreground text-xs uppercase tracking-widest px-3 py-1',
          error: 'border-destructive text-destructive',
          success: 'border-foreground',
          warning: 'border-foreground',
          info: 'border-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

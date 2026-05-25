import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '../lib/utils'

type StepStatus = 'complete' | 'current' | 'upcoming'

interface Step {
  title: string
  description?: string
}

interface StepperProps {
  steps: Step[]
  currentStep: number
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

function Stepper({ steps, currentStep, orientation = 'horizontal', className }: StepperProps) {
  return (
    <div
      className={cn(
        orientation === 'horizontal' ? 'flex items-start' : 'flex flex-col',
        className
      )}
    >
      {steps.map((step, index) => {
        const status: StepStatus =
          index < currentStep ? 'complete' : index === currentStep ? 'current' : 'upcoming'

        return (
          <React.Fragment key={index}>
            <div className={cn('flex', orientation === 'horizontal' ? 'flex-col items-center' : 'flex-row items-start gap-3')}>
              {/* indicator */}
              <div
                className={cn(
                  'flex h-8 w-8 shrink-0 items-center justify-center border-2 text-xs font-medium',
                  status === 'complete' && 'border-foreground bg-foreground text-background',
                  status === 'current' && 'border-foreground bg-background text-foreground',
                  status === 'upcoming' && 'border-muted-foreground bg-background text-muted-foreground'
                )}
              >
                {status === 'complete' ? <Check className="h-4 w-4" /> : <span>{index + 1}</span>}
              </div>

              {/* label */}
              <div className={cn(orientation === 'horizontal' ? 'mt-2 text-center' : '')}>
                <p className={cn(
                  'text-xs font-medium uppercase tracking-widest',
                  status === 'upcoming' && 'text-muted-foreground'
                )}>
                  {step.title}
                </p>
                {step.description && (
                  <p className="text-xs text-muted-foreground mt-0.5">{step.description}</p>
                )}
              </div>
            </div>

            {/* connector */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  orientation === 'horizontal'
                    ? 'flex-1 h-[2px] mt-4 mx-2'
                    : 'w-[2px] h-8 ml-4 my-1',
                  index < currentStep ? 'bg-foreground' : 'bg-muted-foreground/30'
                )}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export { Stepper, type Step, type StepStatus }

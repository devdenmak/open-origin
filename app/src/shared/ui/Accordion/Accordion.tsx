'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import { cn } from '@/src/shared/lib/tailwindUtils'
import { Icon } from '@/src/shared/ui/Icon'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('bg-surface-third rounded-2xl max-md:rounded-lg', className)}
    {...props}
  />
))

AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="group flex font-headings text-xl font-semibold text-text-primary">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-5 px-5 font-medium transition-all [&[data-state=open]>div>svg]:rotate-180 text-left',
        className,
      )}
      {...props}
    >
      {children}

      <div className="ml-4 flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent-300 text-base text-white transition-all group-hover:shadow-secondary group-focus-visible:ring group-focus-visible:ring-blue-300 group-active:shadow-none">
        <Icon
          name="outlined/chevron-down"
          className="size-4 shrink-0 transition-transform duration-200"
        />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden px-5 text-lg text-text-third transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down max-md:text-base"
    {...props}
  >
    <div className={cn('pb-5 pt-5 border-t border-t-button-fifth max-md:pt-4', className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }

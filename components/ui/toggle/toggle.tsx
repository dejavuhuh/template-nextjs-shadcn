'use client'

import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import * as TogglePrimitive from '@radix-ui/react-toggle'

import * as React from 'react'
import { toggleVariants } from './variants'

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

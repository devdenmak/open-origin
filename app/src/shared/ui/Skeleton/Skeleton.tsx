import { cn } from '../../lib/tailwindUtils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('animate-pulse rounded-md bg-supportive-primary', className)} {...props} />
  )
}

export { Skeleton }

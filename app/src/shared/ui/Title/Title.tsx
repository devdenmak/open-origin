import { HTMLAttributes } from 'react'

import { cn } from '../../lib/tailwindUtils'
import { titleVariants } from './Title.variants'

export type ITitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface ITitleProps extends HTMLAttributes<HTMLHeadingElement>, titleVariants {
  tag?: ITitleTags
}

const Title = ({ className, tag = 'h2', size, children }: ITitleProps) => {
  const Comp = tag

  return <Comp className={cn(titleVariants({ size, className }))}>{children}</Comp>
}

export default Title

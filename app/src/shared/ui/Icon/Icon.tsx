import { clsx } from 'clsx'
import type { SVGProps } from 'react'

import { AnyIconName, getIconMeta } from '@/src/app/icons'

interface IconProps extends SVGProps<SVGSVGElement> {
  name: AnyIconName
}

export function Icon({ name, className, ...props }: IconProps) {
  const { viewBox, filePath, iconName, axis } = getIconMeta(name)

  return (
    <svg
      className={clsx('icon', className)}
      viewBox={viewBox}
      data-axis={axis}
      focusable="false"
      aria-hidden
      {...props}
    >
      <use href={`/sprites/${filePath}#${iconName}`} />
    </svg>
  )
}

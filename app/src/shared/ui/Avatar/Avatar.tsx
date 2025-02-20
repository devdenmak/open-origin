import { cn } from '../../lib/tailwindUtils'
import { Image } from '../Image'

export type IAvatarProps = {
  className?: string
  src?: string | null
  alt?: string | null
  size?: 'sm' | 'base'
}

const sizes = {
  sm: 40,
  base: 55,
}

const Avatar = ({ className = '', src, alt, size = 'base' }: IAvatarProps) => {
  return (
    <div
      className={cn(
        `overflow-hidden rounded-full shrink-0 relative select-none`,
        {
          'size-[40px]': size === 'sm',
          'size-[55px]': size === 'base',
        },
        className,
      )}
    >
      <Image
        quality={100}
        priority
        fillParent
        width={sizes[size]}
        height={sizes[size]}
        src={src}
        alt={alt ?? ''}
      />
    </div>
  )
}

export default Avatar

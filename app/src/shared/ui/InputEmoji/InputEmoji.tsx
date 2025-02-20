'use client'

import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react'
import { useTheme } from 'next-themes'
import { forwardRef, InputHTMLAttributes } from 'react'
import { useToggle } from 'react-use'

import { cn } from '@/src/shared/lib/tailwindUtils'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/src/shared/ui/Dropdown'
import { Icon } from '@/src/shared/ui/Icon'

import { Input } from '../Input'
import { NoSSSR } from '../NoSSSR'

const InputEmoji = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, onChange, ...props }, ref) => {
    const { theme: resolvedTheme } = useTheme()

    const [on, toggle] = useToggle(false)

    const handleChange = (val: EmojiClickData) => {
      // @ts-ignore
      onChange?.(val.emoji)
      toggle(false)
    }

    return (
      <section className={cn('flex gap-2', className)}>
        <Input
          className="custom-input group pointer-events-none w-[100px] text-center"
          readOnly
          inputSize="md"
          type="text"
          ref={ref}
          {...props}
        />

        <DropdownMenu open={on} onOpenChange={toggle}>
          <DropdownMenuTrigger className="flex size-[42px] items-center justify-center rounded-2lg border border-supportive-primary bg-surface-fourth text-xs transition-colors hover:border-accent-300 active:border-supportive-primary">
            <Icon name="outlined/plus"></Icon>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="start"
            className="mr-4 min-w-[350px] p-0 max-sm:min-w-[310px]"
          >
            <NoSSSR>
              <EmojiPicker
                lazyLoadEmojis
                width="100%"
                skinTonesDisabled
                theme={resolvedTheme as Theme}
                onEmojiClick={(val) => handleChange(val)}
              />
            </NoSSSR>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    )
  },
)

InputEmoji.displayName = 'InputEmoji'

export default InputEmoji

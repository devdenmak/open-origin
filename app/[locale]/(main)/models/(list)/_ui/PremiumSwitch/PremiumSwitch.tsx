'use client'

import { useModelsQuery } from '@/src/entities/model/hooks/useModelsQuery'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { Switch } from '@/src/shared/ui/Switch'

export type IPremiumSwitchProps = {
  className?: string
  label: string
}

const PremiumSwitch = ({ className, label }: IPremiumSwitchProps) => {
  const { query, setQuery } = useModelsQuery()

  const handleChange = (val: boolean) => {
    if (val) {
      return setQuery({
        page: '',
        availability: 'premium',
      })
    }

    setQuery({
      page: '',
      availability: null,
    })
  }

  return (
    <section className={cn('px-2.5 flex justify-between', className)}>
      <h3 className="mr-5 font-headings text-xs font-semibold text-button-eighth">{label}</h3>
      <Switch
        checked={query.availability === 'premium'}
        onCheckedChange={handleChange}
        className="shrink-0"
      />
    </section>
  )
}

export default PremiumSwitch

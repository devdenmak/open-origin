'use client'

import { useTranslations } from 'next-intl'

import { useModel } from '@/src/entities/model/hooks/useModel'
import { ModelsShow200 } from '@/src/shared/api/model'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { MarkdownOutput } from '@/src/shared/ui/MarkdownOutput'

export type IModelDescriptionProps = {
  className?: string
  model: ModelsShow200
}

const ModelDescription = ({ className, model }: IModelDescriptionProps) => {
  const t = useTranslations('ModelPage')

  const { data } = useModel(model)
  const _model = (data?.data ?? {}) as ModelsShow200['data']

  return (
    <section className={cn(className)}>
      {_model.type && (
        <div className="mb-9">
          <h2 className="mb-1.5 font-headings text-base font-semibold text-text-primary">
            {t('modelType')}
          </h2>

          <p className="font-main text-base font-normal text-text-secondary">{_model.type}</p>
        </div>
      )}

      {_model.description && (
        <div>
          <h2 className="mb-1.5 font-headings text-base font-semibold text-text-primary">
            {t('about')}
          </h2>

          <MarkdownOutput description={_model.description} />
        </div>
      )}
    </section>
  )
}

export default ModelDescription

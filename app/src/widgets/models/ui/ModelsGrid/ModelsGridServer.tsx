import { getTranslations } from 'next-intl/server'

import { MODELS_TAG } from '@/src/entities/model/config'
import { modelsList } from '@/src/shared/api/fetch'
import { ModelsListParams } from '@/src/shared/api/model'
import { ModelsGridClient } from '@/src/widgets/models/ui/ModelsGrid/ModelsGridClient'

import { ModelsGridPagination } from './ModelsGridPagination'

export type IModelsGridProps = {
  className?: string
  query?: ModelsListParams
  disablePagination?: boolean
}

const ModelsGridServer = async ({
  query,
  disablePagination = false,
  className,
}: IModelsGridProps) => {
  const t = await getTranslations('Common')

  const response = await modelsList(query, {
    fetchConfig: {
      tags: [MODELS_TAG],
    },
  })

  const { meta } = response

  const hasPagination = meta?.per_page && meta?.total ? meta?.per_page < meta?.total : false
  const showPagination = !disablePagination && hasPagination

  return (
    <>
      <section className={className}>
        {response?.data?.length ? (
          <ModelsGridClient models={response} query={query} />
        ) : (
          <>{t('noData')}</>
        )}
      </section>

      {showPagination && <ModelsGridPagination className="mt-8 flex justify-center" meta={meta} />}
    </>
  )
}

export default ModelsGridServer

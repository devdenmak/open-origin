'use client'

import useSWR from 'swr'

import { ModelsList200, ModelsListParams } from '@/src/shared/api/model'
import { getModelsListKey, modelsList } from '@/src/shared/api/swr'

export const useModels = (query?: ModelsListParams, initialModels?: ModelsList200) => {
  const { data, mutate, isLoading, isValidating } = useSWR(
    getModelsListKey(query),
    () => modelsList(query),
    {
      revalidateOnMount: true,
      fallbackData: initialModels,
    },
  )

  return {
    data,
    mutate,
    isLoading,
    isValidating,
    isLoadingOrValidating: isLoading || isValidating,
  }
}

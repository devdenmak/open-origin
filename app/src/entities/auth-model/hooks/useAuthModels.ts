'use client'

import useSWR from 'swr'

import { getModelsMyKey, modelsMy } from '@/src/shared/api/swr'

export const useAuthModels = () => {
  const { data, mutate, isLoading, isValidating } = useSWR(getModelsMyKey(), () => modelsMy())

  return {
    data,
    mutate,
    isLoading,
    isValidating,
    isLoadingOrValidating: isLoading || isValidating,
  }
}

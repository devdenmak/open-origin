'use client'

import useSWR from 'swr'

import { getModelsFavoritesKey, modelsFavorites } from '@/src/shared/api/swr'

export const useFavoritesModels = () => {
  const { data, mutate, isLoading, isValidating } = useSWR(getModelsFavoritesKey(), () =>
    modelsFavorites(),
  )

  return {
    data,
    mutate,
    isLoading,
    isValidating,
    isLoadingOrValidating: isLoading || isValidating,
  }
}

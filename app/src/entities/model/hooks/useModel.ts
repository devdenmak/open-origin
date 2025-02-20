'use client'

import useSWR from 'swr'

import { ModelsShow200 } from '@/src/shared/api/model'
import { getModelsShowKey, modelsShow } from '@/src/shared/api/swr'

import { useAuthUser } from '../../auth-user/hooks/useAuthUser'

export const useModel = (initialModel?: ModelsShow200) => {
  const { data: dataUser } = useAuthUser()
  const { data, mutate, isLoading, isValidating } = useSWR(
    getModelsShowKey(initialModel?.data?.uuid ?? ''),
    () => modelsShow(initialModel?.data?.uuid ?? ''),
    {
      isPaused() {
        return !initialModel
      },
      revalidateOnMount: true,
      fallbackData: initialModel,
    },
  )

  return {
    data,
    mutate,
    isLoading,
    isValidating,
    isLoadingOrValidating: isLoading || isValidating,
    isMyModel: dataUser?.data?.id === data?.data?.author?.id,
  }
}

'use client'

import { parseAsString, useQueryStates } from 'nuqs'

export const useModelsQuery = () => {
  const [query, setQuery] = useQueryStates(
    {
      availability: parseAsString.withDefault(''),
      tag_id: parseAsString.withDefault(''),
      page: parseAsString.withDefault(''),
      q: parseAsString.withDefault(''),
    },
    {
      shallow: false,
      clearOnDefault: true,
      history: 'push',
      scroll: false,
    },
  )

  return { query, setQuery }
}

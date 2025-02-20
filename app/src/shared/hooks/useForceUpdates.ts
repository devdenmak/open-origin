import { useCallback, useState } from 'react'

export const useForceUpdate = () => {
  const [key, setTick] = useState(0)

  const update = useCallback(() => {
    setTick((tick) => tick + 1)
  }, [])

  return { key, update }
}

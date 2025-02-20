export const handleError = (err?: unknown): string => {
  const error = err instanceof Error ? err?.message : err

  if (typeof error === 'string') return error

  if (typeof error === 'object') {
    return JSON.stringify(error, null, 2)
  }

  return 'An unexpected error has occurred'
}

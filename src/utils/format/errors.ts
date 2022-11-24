export const formatError: any = (error: any) => {
  if (!error) return null

  if (typeof error === 'string') {
    return prettifyKnownErrors(error)
  }

  if (Array.isArray(error)) {
    return error.map(formatError).join(' ')
  }

  if (typeof error === 'object') {
    return prettifyKnownErrors(error?.message)
  }

  return 'Unknown error'
}

const prettifyKnownErrors = (error: string) => {
  switch (error) {
    default:
      return error
  }
}

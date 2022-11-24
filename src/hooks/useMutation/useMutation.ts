import { environment } from 'utils/constants'
import { formatMutationResults } from 'utils/format'
import { error } from 'utils/logger'
import {
  MutationFunction,
  UseMutationOptions,
  useMutation as reactQueryUseMutation
} from 'utils/reactquery'

// import { Toast } from 'utils/toast'

export const useMutation = <TData = unknown, TVariables = void>(
  inputFunction: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, unknown, TVariables, unknown>, 'mutationFn'>
) => {
  const queryResults = reactQueryUseMutation<TData, unknown, TVariables, unknown>(inputFunction, {
    onError: (err) => {
      // Toast.error('Something went wrong', 'Please try again later.')
      error('useMutation onError', err)
    },
    retry: environment.isDev ? false : 3,
    ...options
  })

  return formatMutationResults<TData, TVariables>(queryResults)
}

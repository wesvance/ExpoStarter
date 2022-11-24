import { environment, times } from 'utils/constants'
import { formatQueryResults } from 'utils/format'
import { error } from 'utils/logger'
import {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  useQuery as reactQueryUseQuery
} from 'utils/reactquery'

export const useQuery = <TData = unknown>(
  key: QueryKey,
  inputFunction: QueryFunction<TData, QueryKey>,
  options?: Omit<UseQueryOptions<TData, unknown, TData, QueryKey>, 'queryKey' | 'queryFn'>
) => {
  const queryResults = reactQueryUseQuery<TData>(key, inputFunction, {
    onError: (err) => {
      error(`useQuery onError on key: ${key}`, err)
    },
    staleTime: times.QUERY_STALE_TIME,
    retry: environment.isDev ? false : 3,
    ...options
  })

  return formatQueryResults(queryResults)
}

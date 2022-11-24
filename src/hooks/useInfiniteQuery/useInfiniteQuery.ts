import { times } from 'utils/constants'
import { formatInfiniteQueryResults } from 'utils/format'
import { error } from 'utils/logger'
import {
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  useInfiniteQuery as reactQueryUseInfiniteQuery
} from 'utils/reactquery'

export const useInfiniteQuery = <TData = unknown>(
  key: QueryKey,
  inputFunction: QueryFunction<TData, QueryKey>,
  options?: Omit<
    UseInfiniteQueryOptions<TData, unknown, TData, TData, QueryKey>,
    'queryKey' | 'queryFn'
  >
) => {
  const queryResults = reactQueryUseInfiniteQuery<TData>(key, inputFunction, {
    onError: (err) => {
      error(`useInfiniteQuery onError on key: ${key}`, err)
    },
    staleTime: times.QUERY_STALE_TIME,
    ...options
  })

  return formatInfiniteQueryResults(queryResults)
}

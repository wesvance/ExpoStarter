import { MutableResult } from 'types/query'

import { UseInfiniteQueryResult, UseMutationResult, UseQueryResult } from 'utils/reactquery'

import { formatError } from './errors'

export const formatQueryResults = <TData>(queryResults: UseQueryResult<TData>) => {
  return {
    data: queryResults?.data,
    isFetched: queryResults?.isFetched,
    isFetching: queryResults?.isFetching,
    refetch: queryResults?.refetch,
    remove: queryResults?.remove,
    error: formatError(queryResults?.error),
    isLoading: queryResults?.isLoading,
    isError: queryResults?.isError
  }
}

export const formatInfiniteQueryResults = <TData>(queryResults: UseInfiniteQueryResult<TData>) => {
  return {
    data: queryResults?.data,
    error: formatError(queryResults?.error),
    fetchNextPage: queryResults?.fetchNextPage,
    isFetchingNextPage: queryResults?.isFetchingNextPage,
    hasNextPage: queryResults?.hasNextPage,
    isFetching: queryResults?.isFetching,
    status: queryResults?.status,

    refetch: queryResults?.refetch,
    remove: queryResults?.remove,
    isLoading: queryResults?.isLoading,
    isError: queryResults?.isError
  }
}

export const formatMutationResults = <TData = unknown, TVariables = void>(
  mutationResults: UseMutationResult<TData, unknown, TVariables, unknown>
): MutableResult<TData, TVariables> => {
  return {
    data: mutationResults?.data,
    error: formatError(mutationResults?.error),
    isError: mutationResults?.isError,
    isLoading: mutationResults?.isLoading,
    reset: mutationResults.reset,
    mutate: mutationResults.mutate,
    mutateAsync: mutationResults.mutateAsync
  }
}

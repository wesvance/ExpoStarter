import { QueryObserverResult, UseMutateAsyncFunction, UseMutateFunction } from 'utils/reactquery'

// High-level query types, used to structure requests and responses to react-query
export type QueryOptionsType<TData> = {
  lastVisible?: TData
  order?: keyof TData
  limit?: number
  orderDirection?: 'asc' | 'desc'
  createIfNotFound?: boolean
}

export type Data = any
export type Options<TData> = QueryOptionsType<TData>

export interface QueryResult<TData> {
  data?: TData
  error?: string
  isError: boolean
  isLoading: boolean
  refetch: Promise<QueryObserverResult<TData, unknown>>
  remove: () => void
}

export interface MutableResult<TData, TVariables> {
  data?: unknown
  error?: string
  isError: boolean
  isLoading: boolean
  reset: () => void
  mutate: UseMutateFunction<TData, unknown, TVariables, unknown>
  mutateAsync: UseMutateAsyncFunction<TData, unknown, TVariables, unknown>
}

export type SingleItemQuery<ParamsType, DataType extends Record<string, unknown>> = (
  data: ParamsType,
  options?: Options<DataType>
) => Promise<DataType>

export type MultiItemQuery<ParamsType, DataType extends Record<string, unknown>> = (
  ...parameters: Parameters<SingleItemQuery<ParamsType, DataType>>
) => Promise<DataType[]>

import { QueryKey } from "@tanstack/query-core";
import { QueryFunction, QueryObserverSuccessResult, useQuery, UseQueryOptions } from "@tanstack/react-query";

type SuspendedQueryOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>
  = Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'suspense'>;

type UseSuspenseQueryResult<TData = unknown, TError = unknown> = QueryObserverSuccessResult<TData, TError>;

export function useSuspendedQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: SuspendedQueryOptions<TQueryFnData, TError, TData, TQueryKey>) {
  return useQuery(queryKey, queryFn, { ...options, suspense: true }) as UseSuspenseQueryResult<TData, TError>;
}
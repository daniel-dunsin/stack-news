export interface useQueryResults<T> {
  refetch: Function;
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  isRefetching?: boolean;
}

export interface useMutateResult<Result, FunctionParam = string> {
  data: Result | undefined;
  mutate: Function;
  isPending: boolean;
  isError: boolean;
}

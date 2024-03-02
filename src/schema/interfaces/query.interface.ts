export interface useQueryResults<T> {
  refetch: Function;
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
}

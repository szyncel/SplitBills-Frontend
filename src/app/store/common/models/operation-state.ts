export interface OperationState<T> {
  data?: T;
  loading?: boolean;
  success?: boolean;
  errors?: any;
}

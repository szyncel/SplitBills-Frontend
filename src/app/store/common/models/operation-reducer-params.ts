import { OperationTypes } from './operation-types';
import { PayloadAction } from './payload-action';
import { OperationState } from './operation-state';

export interface OperationReducerParams<T> {
  types: OperationTypes;
  action: PayloadAction;
  state: OperationState<T>;
}

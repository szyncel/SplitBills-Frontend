import { OperationReducerParams } from '../models/operation-reducer-params';
import { OperationState } from '../models/operation-state';

export function operationReducer<T>({ state, action, types }: OperationReducerParams<T>): OperationState<T> {
  switch (action.type) {
    case types.request:
      return {
        ...state,
        success: false,
        loading: true,
        errors: null
      };
    case types.requestSuccess:
      return {
        ...state,
        data: action.payload,
        loading: false,
        success: true,
        errors: null
      };
    case types.requestFail:
      return {
        ...state,
        loading: false,
        errors: action.payload,
        success: false
      };
    case types.requestClear:
      return {
        ...state,
        loading: false,
        data: null,
        errors: null,
        success: false
      };
    default:
      return state;
  }
}

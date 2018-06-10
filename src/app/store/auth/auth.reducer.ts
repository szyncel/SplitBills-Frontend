import { OperationState } from '../common/models/operation-state';
import { Auth } from './models/auth';
import { User } from './models/user';
import { operationReducer } from '../common/reducers/operation.reducer';
import { Action, AuthActionTypes } from './actions/auth.actions';

/** */
export interface AuthState {
  login: OperationState<Auth>;
  register: OperationState<User>;
}

/** */
const authInitialState = {
  login: { data: null, loading: false, success: false, errors: null },
  register: { data: null, loading: false, success: false, errors: null },
};

export function authReducer(state: AuthState = authInitialState, action: Action): AuthState {
  return {
    register: operationReducer({
      action, state: state.register, types: {
        request: AuthActionTypes.REGISTER,
        requestFail: AuthActionTypes.REGISTER_FAIL,
        requestSuccess: AuthActionTypes.REGISTER_SUCCESS,
        requestClear: AuthActionTypes.REGISTER_CLEAR
      }
    }),
    login: operationReducer({
      action, state: state.login, types: {
        request: AuthActionTypes.LOGIN,
        requestFail: AuthActionTypes.LOGIN_FAIL,
        requestSuccess: AuthActionTypes.LOGIN_SUCCESS,
        requestClear: AuthActionTypes.LOGOUT
      }
    })
  };
}



import { PayloadAction } from '../../common/models/payload-action';
import { SendPayload } from '../../common/models/payload/send-payload';
import { User } from '../models/user';
import { Auth } from '../models/auth';

export const AuthActionTypes = {
  REGISTER: '[Auth] Register',
  REGISTER_FAIL: '[Auth] Register Fail',
  REGISTER_SUCCESS: '[Auth] Register Success',
  REGISTER_CLEAR: '[Auth] Register Clear',

  LOGIN: '[Auth] Login',
  LOGIN_FAIL: '[Auth] Login Fail',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGOUT: '[Auth] Logout',
};

export class RegisterUserAction implements PayloadAction {
  readonly type = AuthActionTypes.REGISTER;

  constructor(public payload: SendPayload<User>) {
  }
}

export class RegisterUserSuccessAction implements PayloadAction {
  readonly type = AuthActionTypes.REGISTER_SUCCESS;

  constructor(public payload: any) {
  }
}

export class RegisterUserFailAction implements PayloadAction {
  readonly type = AuthActionTypes.REGISTER_SUCCESS;

  constructor(public payload: any) {
  }
}

export class RegisterUserClearAction implements PayloadAction {
  readonly type = AuthActionTypes.REGISTER_CLEAR;

  constructor(public payload: any) {
  }
}

export class LoginUserAction implements PayloadAction {
  readonly type = AuthActionTypes.REGISTER;

  constructor(public payload: SendPayload<Auth>) {
  }
}

export class LoginUserSuccessAction implements PayloadAction {
  readonly type = AuthActionTypes.REGISTER_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoginUserFailAction implements PayloadAction {
  readonly type = AuthActionTypes.REGISTER_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LogoutUserAction implements PayloadAction {
  readonly type = AuthActionTypes.REGISTER_CLEAR;

  constructor(public payload: any) {
  }
}

export type Action = RegisterUserAction
  | RegisterUserSuccessAction
  | RegisterUserFailAction
  | RegisterUserClearAction
  | LoginUserAction
  | LoginUserSuccessAction
  | LoginUserFailAction
  | LogoutUserAction;

import { PayloadAction } from '../../common/models/payload-action';
import { HttpErrorResponse } from '@angular/common/http';

export const FriendsActionTypes = {
  LOAD_ALL_FRIENDS: '[Friends] Load all friends',
  LOAD_ALL_FRIENDS_FAIL: '[Friends] Load all friends Fail',
  LOAD_ALL_FRIENDS_SUCCESS: '[Friends] Load all friends Success',
  LOAD_ALL_FRIENDS_CLEAR: '[Friends] Load all friends Clear',

  SELECT_FRIEND: '[Friends] Select friend',

  LOAD_COMMON_EXPENSES: '[Friends] Load common expenses',
  LOAD_COMMON_EXPENSES_FAIL: '[Friends] Load common expenses fail',
  LOAD_COMMON_EXPENSES_SUCCESS: '[Friends] Load common expenses success',
  CLEAR_COMMON_EXPENSES: '[Friends] Clear common expenses',
};

export class LoadAllFriendsAction implements PayloadAction {
  readonly type = FriendsActionTypes.LOAD_ALL_FRIENDS;
  readonly payload = null;
}

export class LoadAllFriendsSuccessAction implements PayloadAction {
  readonly type = FriendsActionTypes.LOAD_ALL_FRIENDS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoadAllFriendsFailAction implements PayloadAction {
  readonly type = FriendsActionTypes.LOAD_ALL_FRIENDS_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class LoadAllFriendsClearAction implements PayloadAction {
  readonly type = FriendsActionTypes.LOAD_ALL_FRIENDS_CLEAR;
  readonly payload = null;
}

export class SelectFriendAction implements PayloadAction {
  readonly type = FriendsActionTypes.SELECT_FRIEND;

  constructor(public payload: ByIdPayload) {
  }
}

export class LoadCommonExpensesAction implements PayloadAction {
  readonly type = FriendsActionTypes.LOAD_COMMON_EXPENSES;

  constructor(public payload: ByIdPayload) {
  }
}

export class LoadCommonExpensesSuccessAction implements PayloadAction {
  readonly type = FriendsActionTypes.LOAD_COMMON_EXPENSES_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoadCommonExpensesFailAction implements PayloadAction {
  readonly type = FriendsActionTypes.LOAD_COMMON_EXPENSES_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class LoadCommonExpensesClearAction implements PayloadAction {
  readonly type = FriendsActionTypes.CLEAR_COMMON_EXPENSES;
  readonly payload = null;
}

export type Action = LoadAllFriendsAction
  | LoadAllFriendsSuccessAction
  | LoadAllFriendsFailAction
  | LoadAllFriendsClearAction
  | SelectFriendAction
  | LoadCommonExpensesAction
  | LoadCommonExpensesSuccessAction
  | LoadCommonExpensesFailAction
  | LoadCommonExpensesClearAction;

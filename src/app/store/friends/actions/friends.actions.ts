import { PayloadAction } from '../../common/models/payload-action';
import { HttpErrorResponse } from '@angular/common/http';

export const FriendsActionTypes = {
  LOAD_ALL_FRIENDS: '[Friends] Load all friends',
  LOAD_ALL_FRIENDS_FAIL: '[Friends] Load all friends Fail',
  LOAD_ALL_FRIENDS_SUCCESS: '[Friends] Load all friends Success',
  LOAD_ALL_FRIENDS_CLEAR: '[Friends] Load all friends Clear',

  SELECT_FRIEND: '[Friends] Select friend'
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

export type Action = LoadAllFriendsAction
  | LoadAllFriendsSuccessAction
  | LoadAllFriendsFailAction
  | LoadAllFriendsClearAction
  | SelectFriendAction;

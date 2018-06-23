import { createSelector } from '@ngrx/store';
import { getLoginState } from '../auth.reducer';
import { getAuthState } from '../../index';
import { OperationState } from '../../common/models/operation-state';
import { AuthUtil } from '../../../shared/utils/auth-util';

export const getUserData = AuthUtil.getTokenData;

export const getIsLoggedIn = AuthUtil.isExpired;

export const getAuthLogin = createSelector(getAuthState, getLoginState);

export const getAuthLoadingState = createSelector(getAuthLogin,
  (state: OperationState<any>) => state.loading);

export const getAuthSuccessState = createSelector(getAuthLogin,
  (state: OperationState<any>) => state.success);

export const getAuthErrorState = createSelector(getAuthLogin,
  (state: OperationState<any>) => state.errors);

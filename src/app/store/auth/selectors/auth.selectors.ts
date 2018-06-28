import { createSelector } from '@ngrx/store';
import { getLoginState } from '../auth.reducer';
import { getAuthState } from '../../index';
import { OperationState } from '../../common/models/operation-state';
import { AuthUtil } from '../../../shared/utils/auth-util';
import * as _ from 'lodash';

export const getUserData = AuthUtil.getTokenData;

export const getIsTokenExist = AuthUtil.isTokenExist;

export const getIsLoggedIn = createSelector(getIsTokenExist,
  (token: string) => !_.isNil(token));

export const getAuthLogin = createSelector(getAuthState, getLoginState);

export const getAuthLoadingState = createSelector(getAuthLogin,
  (state: OperationState<any>) => state.loading);

export const getAuthSuccessState = createSelector(getAuthLogin,
  (state: OperationState<any>) => state.success);

export const getAuthErrorState = createSelector(getAuthLogin,
  (state: OperationState<any>) => state.errors);

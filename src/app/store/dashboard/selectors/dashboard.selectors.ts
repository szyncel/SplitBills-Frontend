import { createSelector } from '@ngrx/store';
import { getDashboardState, getFriendsState } from '../../index';
import { OperationState } from '../../common/models/operation-state';
import * as _ from 'lodash';
import { getDashboardDataState } from '../dashboard.reducer';

export const getDashboardData = createSelector(getDashboardState, getDashboardDataState);

export const getDashboardDataLoadingState = createSelector(getDashboardData,
  (state: OperationState<any>) => state.loading);

export const getDashboardDataSuccessState = createSelector(getDashboardData,
  (state: OperationState<any>) => state.success);

export const getDashboardDataErrorState = createSelector(getDashboardData,
  (state: OperationState<any>) => state.errors);

export const getDashboardDataDataState = createSelector(getDashboardData,
  (state: OperationState<any>) => state.data);


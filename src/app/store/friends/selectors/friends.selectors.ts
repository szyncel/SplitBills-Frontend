import { createSelector } from '@ngrx/store';
import { getFriendsState } from '../../index';
import { OperationState } from '../../common/models/operation-state';
import { getAllFriendsState, getSelectedFriend } from '../friends.reducer';
import { Friend } from '../models/friend';
import * as _ from 'lodash';

export const getAllFriends = createSelector(getFriendsState, getAllFriendsState);

export const getAllFriendsLoadingState = createSelector(getAllFriends,
  (state: OperationState<any>) => state.loading);

export const getAllFriendsSuccessState = createSelector(getAllFriends,
  (state: OperationState<any>) => state.success);

export const getAllFriendsErrorState = createSelector(getAllFriends,
  (state: OperationState<any>) => state.errors);

export const getAllFriendsDataState = createSelector(getAllFriends,
  (state: OperationState<any>) => state.data);

export const getSelectedFriendState = createSelector(getFriendsState, getSelectedFriend);

export const getSelectedFriendData = createSelector(
  getSelectedFriendState,
  getAllFriendsDataState,
  (id: number, data: Friend[]) => _.find(data, { Id: id }));


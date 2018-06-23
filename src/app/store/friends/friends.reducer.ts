import { OperationState } from '../common/models/operation-state';
import { operationReducer } from '../common/reducers/operation.reducer';
import { Action, FriendsActionTypes } from './actions/friends.actions';
import { selectReducer } from '../common/reducers/select.reducer';

/** */
export interface FriendsState {
  searchAllFriends: OperationState<any>;
  selectedFriend: number;
}

/** */
const friendsInitialState = {
  searchAllFriends: { data: null, loading: false, success: false, errors: null },
  selectedFriend: null
};

export function friendsReducer(state: FriendsState = friendsInitialState, action: Action): FriendsState {
  return {
    searchAllFriends: operationReducer({
      action, state: state.searchAllFriends, types: {
        request: FriendsActionTypes.LOAD_ALL_FRIENDS,
        requestFail: FriendsActionTypes.LOAD_ALL_FRIENDS_FAIL,
        requestSuccess: FriendsActionTypes.LOAD_ALL_FRIENDS_SUCCESS,
        requestClear: FriendsActionTypes.LOAD_ALL_FRIENDS_CLEAR
      }
    }),
    selectedFriend: selectReducer(state.selectedFriend, action, {
      select: FriendsActionTypes.SELECT_FRIEND
    })
  };
}

export const getAllFriendsState = (state: FriendsState) => state.searchAllFriends;

export const getSelectedFriend = (state: FriendsState) => state.selectedFriend;




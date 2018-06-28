import { authReducer, AuthState } from './auth/auth.reducer';
import { Action, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { friendsReducer, FriendsState } from './friends/friends.reducer';
import { dashboardReducer, DashboardState } from './dashboard/dashboard.reducer';

export interface AppState {
  auth: AuthState;
  friends: FriendsState;
  dashboard: DashboardState;
}

export const appReducers = {
  auth: authReducer,
  friends: friendsReducer,
  dashboard: dashboardReducer
};

export function getReducers(): ActionReducerMap<AppState, Action> {
  return appReducers;
}

export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Reducers');
export const reducerProvider = [
  { provide: reducerToken, useFactory: getReducers }
];

export const getAuthState = (state: AppState) => state.auth;

export const getFriendsState = (state: AppState) => state.friends;

export const getDashboardState = (state: AppState) => state.dashboard;

//
// export const appReducers = {};

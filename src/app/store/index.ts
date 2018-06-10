import { authReducer, AuthState } from './auth/auth.reducer';
import { Action, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

export interface AppState {
  auth: AuthState;
}

export const appReducers = {
  auth: authReducer
};

export function getReducers(): ActionReducerMap<AppState, Action> {
  return appReducers;
}

export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Reducers');
export const reducerProvider = [
  { provide: reducerToken, useFactory: getReducers }
];

//
// export const appReducers = {};

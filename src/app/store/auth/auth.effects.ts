
import {tap, catchError, switchMap, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppState } from '../index';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';
import {
  Action,
  AuthActionTypes, LoginUserAction, LoginUserFailAction,
  LoginUserSuccessAction,
  RegisterUserFailAction,
  RegisterUserSuccessAction
} from './actions/auth.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';







import { AuthUtil } from '../../shared/utils/auth-util';
import { LoginSuccessResponse } from './models/login-success-response';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect() singUpUser$ = this.actions$
    .ofType(AuthActionTypes.REGISTER).pipe(
    map((action: any) => action.payload),
    switchMap((payload: any) => this.service
      .signup(payload.data).pipe(
      map((res) => {
        return new RegisterUserSuccessAction({ res });
      }),
      catchError((error: HttpErrorResponse) => {
        return of(new RegisterUserFailAction({ info: error.message }));
      }),)
    ),);

  @Effect({ dispatch: false }) signupSuccess$ = this.actions$
    .ofType(AuthActionTypes.REGISTER_SUCCESS).pipe(
    map((action: Action) => action.payload),
    tap(() => {
      this.snackBar.open('Rejestracja przebiegła pomyślnie', 'Ok', { duration: 3500 });
    }),);

  @Effect({ dispatch: false }) signupFail$ = this.actions$
    .ofType(AuthActionTypes.REGISTER_FAIL).pipe(
    map((action: Action) => action.payload),
    map((payload: any) => payload.errors),
    tap((errors: HttpErrorResponse) => {
      console.log(errors);
      this.snackBar.open('Błąd', 'Ok', { duration: 3500 });
    }),);

  @Effect() singinUser$ = this.actions$
    .ofType(AuthActionTypes.LOGIN).pipe(
    map((action: LoginUserAction) => action.payload),
    switchMap((payload: any) => this.service
      .signin(payload.data).pipe(
      map((response: LoginSuccessResponse) => {
        return new LoginUserSuccessAction(response);
      }),
      catchError((error: HttpErrorResponse) => {
        return of(new LoginUserFailAction({ info: error }));
      }),)
    ),);

  @Effect({ dispatch: false }) loginSuccess$ = this.actions$
    .ofType(AuthActionTypes.LOGIN_SUCCESS).pipe(
    map((action: Action) => action.payload),
    tap(() => {
      this.snackBar.open('Logowanie pomyślne', 'Ok', { duration: 3500 });
      this.router.navigate(['/dashboard']);
    }),);

  @Effect({ dispatch: false }) logout$ = this.actions$
    .ofType(AuthActionTypes.LOGOUT).pipe(
    map((action: Action) => action.payload),
    tap(() => {
      sessionStorage.clear();
      this.snackBar.open('Wylogowałeś się', 'Ok', { duration: 3500 });
      this.router.navigate(['/']);
    }),);

  @Effect({ dispatch: false }) updateToken$ = this.actions$
    .ofType(AuthActionTypes.LOGIN_SUCCESS).pipe(
    map((action: Action) => action.payload),
    tap((payload: any) => {
      AuthUtil.accessToken = payload.auth_token;
    }),);

  constructor(private store: Store<AppState>,
              private actions$: Actions,
              private service: AuthService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }
}

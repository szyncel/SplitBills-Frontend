import { Injectable } from '@angular/core';
import { AppState } from '../index';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';
import {
  Action,
  AuthActionTypes, LoginUserFailAction,
  LoginUserSuccessAction,
  RegisterUserFailAction,
  RegisterUserSuccessAction
} from './actions/auth.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/do';
import { AuthUtil } from '../../shared/utils/auth-util';
import { LoginSuccessResponse } from './models/login-success-response';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect() singUpUser$ = this.actions$
    .ofType(AuthActionTypes.REGISTER)
    .map((action: any) => action.payload)
    .switchMap((payload: any) => this.service
      .signup(payload.data)
      .map((res) => {
        return new RegisterUserSuccessAction({ res });
      })
      .catch((error: HttpErrorResponse) => {
        return of(new RegisterUserFailAction({ info: error.message }));
      })
    );

  @Effect({ dispatch: false }) signupSuccess$ = this.actions$
    .ofType(AuthActionTypes.REGISTER_SUCCESS)
    .map((action: Action) => action.payload)
    .do(() => {
      this.snackBar.open('Rejestracja przebiegła pomyślnie', 'Ok', { duration: 3500 });
    });

  @Effect({ dispatch: false }) signupFail$ = this.actions$
    .ofType(AuthActionTypes.REGISTER_FAIL)
    .map((action: Action) => action.payload)
    .map((payload: any) => payload.errors)
    .do((errors: HttpErrorResponse) => {
      console.log(errors);
      this.snackBar.open('Błąd', 'Ok', { duration: 3500 });
    });

  @Effect() singinUser$ = this.actions$
    .ofType(AuthActionTypes.LOGIN)
    .map((action: any) => action.payload)
    .switchMap((payload: any) => this.service
      .signin(payload.data)
      .map((response: LoginSuccessResponse) => {
        return new LoginUserSuccessAction(response);
      })
      .catch((error: HttpErrorResponse) => {
        return of(new LoginUserFailAction({ info: error }));
      })
    );

  @Effect({ dispatch: false }) loginSuccess$ = this.actions$
    .ofType(AuthActionTypes.LOGIN_SUCCESS)
    .map((action: Action) => action.payload)
    .do(() => {
      this.snackBar.open('Logowanie pomyślne', 'Ok', { duration: 3500 });
      this.router.navigate(['/dashboard']);
    });

  @Effect({ dispatch: false }) logout$ = this.actions$
    .ofType(AuthActionTypes.LOGOUT)
    .map((action: Action) => action.payload)
    .do(() => {
      this.snackBar.open('Wylogowałeś się', 'Ok', { duration: 3500 });
      this.router.navigate(['/']);
      sessionStorage.clear();
    });

  @Effect({ dispatch: false }) updateToken$ = this.actions$
    .ofType(AuthActionTypes.LOGIN_SUCCESS)
    .map((action: Action) => action.payload)
    .do((payload: any) => {
      console.log('ser', payload);
      AuthUtil.accessToken = payload.auth_token;
    });

  constructor(private store: Store<AppState>,
              private actions$: Actions,
              private service: AuthService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }
}

import { Injectable } from '@angular/core';
import { AppState } from '../index';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';
import { AuthActionTypes, RegisterUserFailAction, RegisterUserSuccessAction } from './actions/auth.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthEffects {

  @Effect() singUpUser$ = this.actions$
    .ofType(AuthActionTypes.REGISTER)
    .map((action: any) => action.payload)
    .switchMap((payload: any) => this.service
      .signup(payload.data)
      .map((res) => {
        console.log('effect:', res);
        return new RegisterUserSuccessAction({ res });
      })
      .catch((error: HttpErrorResponse) => {
        console.log('errors??', error);
        return Observable.of(new RegisterUserFailAction({}));
      })
    );

  constructor(private store: Store<AppState>,
              private actions$: Actions,
              private service: AuthService,
              private snackBar: MatSnackBar) {
  }
}

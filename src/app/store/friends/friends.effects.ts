
import {map, catchError, switchMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppState } from '../index';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';







import { AuthUtil } from '../../shared/utils/auth-util';
import { Router } from '@angular/router';
import {
  Action,
  FriendsActionTypes,
  LoadAllFriendsFailAction,
  LoadAllFriendsSuccessAction, LoadCommonExpensesAction, LoadCommonExpensesFailAction, LoadCommonExpensesSuccessAction
} from './actions/friends.actions';
import { FriendsService } from './friends.service';
import { CommonExpenseResponse } from './models/common-expense-response';

@Injectable()
export class FriendsEffects {

  @Effect() loadAllFriends$ = this.actions$
    .ofType(FriendsActionTypes.LOAD_ALL_FRIENDS).pipe(
    switchMap(() => this.service
      .loadAllFriends().pipe(
      map((res) => new LoadAllFriendsSuccessAction(res)
      ),
      catchError((error: HttpErrorResponse) => {
        return of(new LoadAllFriendsFailAction(error));
      }),)
    ));

  // @Effect({ dispatch: false }) signupSuccess$ = this.actions$
  //   .ofType(FriendsActionTypes.LOAD_ALL_FRIENDS_SUCCESS)
  //   .map((action: Action) => action.payload)
  //   .do(() => {
  //     this.snackBar.open('Rejestracja przebiegła pomyślnie', 'Ok', { duration: 3500 });
  //   });

  @Effect() loadCommonExpenses$ = this.actions$
    .ofType(FriendsActionTypes.LOAD_COMMON_EXPENSES).pipe(
    map((action: LoadCommonExpensesAction) => action.payload.id),
    switchMap((id) => this.service
      .loadCommonExpenses(+id).pipe(
      map((res: CommonExpenseResponse) => new LoadCommonExpensesSuccessAction(res)
      ),
      catchError((error: HttpErrorResponse) => of(new LoadCommonExpensesFailAction(error))),)
    ),);

  constructor(private store: Store<AppState>,
              private actions$: Actions,
              private service: FriendsService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }
}

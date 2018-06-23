import { Injectable } from '@angular/core';
import { AppState } from '../index';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material';
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
import { Router } from '@angular/router';
import {
  Action,
  FriendsActionTypes,
  LoadAllFriendsFailAction,
  LoadAllFriendsSuccessAction
} from './actions/friends.actions';
import { FriendsService } from './friends.service';

@Injectable()
export class FriendsEffects {

  @Effect() loadAllFriends$ = this.actions$
    .ofType(FriendsActionTypes.LOAD_ALL_FRIENDS)
    .switchMap(() => this.service
      .loadAllFriends()
      .map((res) => new LoadAllFriendsSuccessAction(res)
      )
      .catch((error: HttpErrorResponse) => {
        return of(new LoadAllFriendsFailAction(error));
      })
    );

  // @Effect({ dispatch: false }) signupSuccess$ = this.actions$
  //   .ofType(FriendsActionTypes.LOAD_ALL_FRIENDS_SUCCESS)
  //   .map((action: Action) => action.payload)
  //   .do(() => {
  //     this.snackBar.open('Rejestracja przebiegła pomyślnie', 'Ok', { duration: 3500 });
  //   });

  constructor(private store: Store<AppState>,
              private actions$: Actions,
              private service: FriendsService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }
}

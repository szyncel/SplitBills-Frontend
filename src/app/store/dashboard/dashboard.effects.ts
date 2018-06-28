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
import { Router } from '@angular/router';
import {
  DashboardActionTypes,
  LoadDashboardDataFailAction,
  LoadDashboardDataSuccessAction
} from './actions/dashboard.actions';
import { DashboardService } from './dashboard.service';

@Injectable()
export class DashboardEffects {

  @Effect() loadDashboardData$ = this.actions$
    .ofType(DashboardActionTypes.LOAD_DASHBOARD_DATA)
    .switchMap(() => this.service
      .loadDashboardData()
      .map((res) => new LoadDashboardDataSuccessAction(res)
      )
      .catch((error: HttpErrorResponse) => {
        return of(new LoadDashboardDataFailAction(error));
      })
    );

  constructor(private store: Store<AppState>,
              private actions$: Actions,
              private service: DashboardService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }
}

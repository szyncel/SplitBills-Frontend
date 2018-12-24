
import {catchError, map, switchMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppState } from '../index';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';







import { Router } from '@angular/router';
import {
  DashboardActionTypes,
  LoadDashboardDataFailAction,
  LoadDashboardDataSuccessAction
} from './actions/dashboard.actions';
import { DashboardService } from './dashboard.service';
import { DashboardData } from './models/dashboard-data';

@Injectable()
export class DashboardEffects {

  @Effect() loadDashboardData$ = this.actions$
    .ofType(DashboardActionTypes.LOAD_DASHBOARD_DATA).pipe(
    switchMap(() => this.service
      .loadDashboardData().pipe(
      map((res: DashboardData) => new LoadDashboardDataSuccessAction(res)
      ),
      catchError((error: HttpErrorResponse) => {
        return of(new LoadDashboardDataFailAction(error));
      }),)
    ));

  constructor(private store: Store<AppState>,
              private actions$: Actions,
              private service: DashboardService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }
}

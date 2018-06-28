import { PayloadAction } from '../../common/models/payload-action';
import { HttpErrorResponse } from '@angular/common/http';

export const DashboardActionTypes = {
  LOAD_DASHBOARD_DATA: '[Dashboard] Load dashboard',
  LOAD_DASHBOARD_DATA_FAIL: '[Dashboard] Load dashboard Fail',
  LOAD_DASHBOARD_DATA_SUCCESS: '[Dashboard] Load dashboard Success',
  LOAD_DASHBOARD_DATA_CLEAR: '[Dashboard] Load dashboard Clear',
};

export class LoadDashboardDataAction implements PayloadAction {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD_DATA;
  readonly payload = null;
}

export class LoadDashboardDataSuccessAction implements PayloadAction {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD_DATA_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoadDashboardDataFailAction implements PayloadAction {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD_DATA_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class LoadDashboardDataClearAction implements PayloadAction {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD_DATA_CLEAR;
  readonly payload = null;
}

export type Action = LoadDashboardDataAction
  | LoadDashboardDataSuccessAction
  | LoadDashboardDataFailAction
  | LoadDashboardDataClearAction;

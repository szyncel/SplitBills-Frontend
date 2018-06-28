import { OperationState } from '../common/models/operation-state';
import { operationReducer } from '../common/reducers/operation.reducer';
import { Action, DashboardActionTypes } from './actions/dashboard.actions';

/** */
export interface DashboardState {
  searchDashboardData: OperationState<any>;
}

/** */
const dashboardInitialState = {
  searchDashboardData: { data: null, loading: false, success: false, errors: null },
};

export function dashboardReducer(state: DashboardState = dashboardInitialState, action: Action): DashboardState {
  return {
    searchDashboardData: operationReducer({
      action, state: state.searchDashboardData, types: {
        request: DashboardActionTypes.LOAD_DASHBOARD_DATA,
        requestFail: DashboardActionTypes.LOAD_DASHBOARD_DATA_FAIL,
        requestSuccess: DashboardActionTypes.LOAD_DASHBOARD_DATA_SUCCESS,
        requestClear: DashboardActionTypes.LOAD_DASHBOARD_DATA_CLEAR
      }
    }),
  };
}

export const getDashboardDataState = (state: DashboardState) => state.searchDashboardData;



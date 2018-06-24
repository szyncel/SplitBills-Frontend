import { getAllFriendsState, getCommenExpensesState } from '../friends.reducer';
import { getFriendsState } from '../../index';
import { createSelector } from '@ngrx/store';
import { OperationState } from '../../common/models/operation-state';
import { getAllFriends } from './friends.selectors';
import { CommonExpenseResponse } from '../models/common-expense-response';

export const getCommonExpensesState = createSelector(getFriendsState, getCommenExpensesState);

export const getCommonExpensesLoading = createSelector(getCommonExpensesState,
  (state: OperationState<CommonExpenseResponse>) => state.loading);

export const getCommonExpensesSuccess = createSelector(getCommonExpensesState,
  (state: OperationState<CommonExpenseResponse>) => state.success);

export const getCommonExpensesError = createSelector(getCommonExpensesState,
  (state: OperationState<CommonExpenseResponse>) => state.errors);

export const getCommonExpensesData = createSelector(getCommonExpensesState,
  (state: OperationState<CommonExpenseResponse>) => state.data);

export const getExpenseSummary = createSelector(getCommonExpensesData,
  (data: CommonExpenseResponse) => data && data.ExpensesSummary
);

export const getCommonExpensesList = createSelector(getCommonExpensesData,
  (data: CommonExpenseResponse) => data && data.CommonExpenses
);

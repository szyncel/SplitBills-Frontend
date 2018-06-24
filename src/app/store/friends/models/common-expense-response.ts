import { CommonExpense } from './common-expense';

export interface CommonExpenseResponse {
  CommonExpenses?: CommonExpense[];
  ExpensesSummary?: number;
}

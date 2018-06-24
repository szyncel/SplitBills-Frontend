import { Friend } from './friend';
import { Payer } from './payer';

export interface CommonExpense {
  Id?: number;
  CategoryName: string;
  Date: string;
  Description: string;
  Notes: string;
  SubcategoryName: string;
  TotalAmount: number;
  Creator: Friend;
  Payers: Payer[];
}

import { Payer } from '../../friends/models/payer';

export interface DashboardData {
  OwedToUserSummary?: number;
  TotalBalance?: number;
  UserBorrowers?: Payer[];
  UserOwedSummary?: number;
  UserOwedTo?: Payer[];
}

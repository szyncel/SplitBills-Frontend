import { Friend } from './friend';

export interface Payer extends Friend {
  Amount: number;
  Settled: boolean;
}

import { Friend } from './friend';

export interface Payer extends Friend {
  Amoun?: number;
  Settled?: boolean;
}

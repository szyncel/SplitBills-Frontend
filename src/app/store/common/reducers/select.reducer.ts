import { PayloadAction } from '../models/payload-action';

export interface SelectReducerTypes {
  select?: string;
  clear?: string;
}

export function selectReducer(
  state: any,
  action: PayloadAction,
  types: SelectReducerTypes
) {
  switch (action.type) {
    case types.select:
      return action.payload.id;
    case types.clear:
      return null;
    default:
      return state;
  }
}

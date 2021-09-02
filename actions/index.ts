import { createAction, ActionType } from "typesafe-actions";
import * as types from "./ActionTypes";

export const increment = createAction(types.INCREMENT)();
export const decrement = createAction(types.DECREMENT)();

export const CountActions = { increment, decrement };
export type CounterReducerActions = ActionType<typeof CountActions>;

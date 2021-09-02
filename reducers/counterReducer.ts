import { createReducer } from "typesafe-actions";
import { INCREMENT, DECREMENT } from "../actions/ActionTypes";
import { CounterReducerActions } from "../actions";

// 상태의 타입 선언
interface ICounterReducer {
	count: number;
}

// 상태 초기화
const initialState: ICounterReducer = {
	count: 0,
};

// 리듀서 추가
const counterReducer = createReducer<ICounterReducer, CounterReducerActions>(initialState, {
	[INCREMENT]: (state: ICounterReducer) => ({
		count: state.count + 1,
	}),
	[DECREMENT]: (state: ICounterReducer) => ({
		count: state.count - 1,
	}),
});

export default counterReducer;

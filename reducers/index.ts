import { combineReducers } from "redux";
import testReducer from "./testReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
	testReducer,
	counterReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { CountActions } from "../actions";

const Test = () => {
	const { count } = useSelector((state: RootState) => state.counterReducer);

	const dispatch = useDispatch();

	const add = () => {
		dispatch(CountActions.increment());
	};
	const sub = () => {
		dispatch(CountActions.decrement());
	};

	return (
		<>
			<div>
				<button onClick={sub}>-</button>
				<p>counter: {count}</p>
				<button onClick={add}>+</button>
			</div>
		</>
	);
};

export default Test;

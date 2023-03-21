import { useDispatch, useSelector } from "react-redux";
import { CounterActions } from "../slices/counter-slice";

const CounterComponent = () => {
    const counterState = useSelector(state => state.counterState);
    const dispatch = useDispatch();

    return (
        <>
            <h1>
                Current Counter: {counterState.count}
            </h1>

            <br />

            <button onClick={() => {
                dispatch(CounterActions.increment(10));
            }}>Increment</button>
            &nbsp;
            <button onClick={() => {
                dispatch(CounterActions.decrement());
            }}>Decrement</button>
            &nbsp;
            <button onClick={() => {
                dispatch(CounterActions.reset());
            }}>Reset</button>
        </>
    );
};

export default CounterComponent;
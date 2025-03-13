import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";


export default function Counter2() {
    const dispatch = useDispatch()
  
  return (
    <div>
      <h1>This is Counter2</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(-20))}>
        Decrement by Amount
      </button>
    </div>
  );
}

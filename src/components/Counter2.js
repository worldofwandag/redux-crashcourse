import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";


export default function Counter2() {
    const dispatch = useDispatch()
  
  return (
    <div>
      <h1>Count is Counter2</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

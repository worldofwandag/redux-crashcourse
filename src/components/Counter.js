import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { useGetAllPostsQuery, useGetPostbyIdQuery } from "../redux/postSlice";

export default function Counter() {
  // const wholeState = useSelector((state) => {
  //   console.log("ENTIRE REDUX STATE:", state);
  //   return state;
  // });

  // Add a safer version of your selector with error handling

  const count = useSelector((state) => {
    if (!state) {
      console.error("Redux state is undefined");
      return 0;
    }
    if (!state.counter) {
      console.error("Redux state.counter is undefined", state);
      return 0;
    }
    return state.counter.count;
  });
  const dispatch = useDispatch();

  const {data, isLoading, isError} = useGetPostbyIdQuery(5)
  console.log(useGetAllPostsQuery())

  return (
    <div>
      {JSON.stringify(data)}
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>
        Increment by Amount
      </button>
    </div>
  );
}

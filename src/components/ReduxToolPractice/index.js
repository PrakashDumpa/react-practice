import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../../reduxToolkit/reducers/slicers/counterSlice";

const ReduxToolKit = () => {
  let { count } = useSelector((state) => state.counter);
  console.log(count);
  let dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center grow">
      <div className="flex flex-col justify-center items-center p-10 bg-white  border-solid border-2 rounded-lg border-sky-500">
        <h1 className="text-4xl">Count: {count}</h1>
        <h1 className="text-4xl">Count:</h1>
        <div className="mt-10 flex justify-between items-center text-white text-2xl [&>*]:px-5 [&>*]:py-2">
          <button
            className="bg-green-700"
            type="button"
            onClick={() => dispatch(increment())}
          >
            Increase
          </button>
          <button
            className="bg-red-700"
            type="button"
            onClick={() => dispatch(decrement())}
          >
            Decrease
          </button>
          <button
            className="bg-orange-500"
            type="button"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReduxToolKit;

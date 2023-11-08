import React, { useContext, useEffect, useState } from "react";
// import { context } from "../../App";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [copyCount, setCopycount] = useState(100);

  // -----------------------access the context values--------------------------
  // let { co, setCo } = useContext(context);
  // console.log(",,,,,,,,,,,,,,,,,,", co);
  // -----------------------------------------------------------------------------

  useEffect(() => {
    // console.log("Radhe Radhe");
    // console.log(count + 1);
    if (count === 5) {
      throw new Error("Something Went Wrong");
      // count.push(6);
    }
  }, [count]);

  return (
    <div className="flex justify-center items-center grow">
      <div className="flex flex-col justify-center items-center p-10 bg-white  border-solid border-2 rounded-lg border-sky-500">
        <h1 className="text-4xl">Count: {count}</h1>
        <h1 className="text-4xl">Count: {copyCount}</h1>
        <div className="mt-10 flex justify-between items-center text-white text-2xl [&>*]:px-5 [&>*]:py-2">
          <button
            className="bg-green-700"
            type="button"
            onClick={() => {
              setCount(count + 1);
              // setCo(co + 1);
            }}
          >
            Increase
          </button>
          <button
            className="bg-red-700"
            type="button"
            onClick={() => setCopycount(copyCount - 1)}
          >
            Decrease
          </button>
          <button
            className="bg-orange-500"
            type="button"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

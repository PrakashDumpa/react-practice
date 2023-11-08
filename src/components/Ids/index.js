import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { context } from "../../App";

const Ids = () => {
  const [item, setItem] = useState("");
  //   let { id } = useParams();
  //   console.log(id);
  let location = useLocation();
  // console.log(location.state);

  const getDetails = async () => {
    try {
      if (location.state) {
        //   const response = await fetch(
        //     `https://jsonplaceholder.typicode.com/todos/${id}`
        //   );
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${location.state}`
        );
        if (response.ok) {
          const data = await response.json();
          // console.log(data, "------------------");
          setItem(data.title);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  });

  // let a = { 1: "dfd", 5: "dfkjh" };

  return (
    <div className="flex justify-center mt-10  text-2xl ">
      <div>{item}</div>
      {/*       
      {Object.keys(a).map((e) => {
        console.log(e);
        return <div key={e}>{a[e]}</div>;
      })} */}
    </div>
  );
};

export default Ids;

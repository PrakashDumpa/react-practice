import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (response.ok) {
        let data = await response.json();
        setList(data);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  //   console.log(list);

  return (
    <>
      <p>
        {/* Transfor the data from home route to todo route using Navlink*/}
        <NavLink to="/todo" state={list}>
          TransFor Data
        </NavLink>
        {/* ------------------------------ */}
      </p>
      <div className="flex justify-center items-center grow text-xl">
        <ul className="list-unstyled mt-4">
          {list.map((each) => (
            <li key={each.id} className="py-3 border px-5 mb-3">
              {/* <NavLink to={`${each.id}`}>{each.title}</NavLink> */}
              <NavLink to="/id" state={each.id}>
                {each.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { useLocation } from "react-router-dom";

// import { NavLink, Outlet, useParams, useLocation } from "react-router-dom";

// export const Nested1 = () => <div>nested1 </div>;
// export const Nested2 = () => <div>nested2</div>;

let updatedList;
const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [editInput, setEditInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  //   access the data from home route while we are navigating.
  const location = useLocation();
  // console.log(location);
  // console.log("----------------", location);
  // ---------------------------------------------

  const onClickAddButton = () => {
    if (inputText !== "") {
      setTodoList((prevState) => [
        ...prevState,
        { id: uuidV4(), title: inputText, isClick: false },
      ]);

      setInputText("");
    }
  };

  const onClickDeleteButton = (event) => {
    updatedList = todoList.filter((each) => event.target.id !== each.id);
    setTodoList(updatedList);
  };

  const onClickEditButton = (event) => {
    // console.log(event.target.id);
    updatedList = todoList.map((each) => {
      if (each.id === event.target.id) {
        setEditInput(each.title);
        return { ...each, isClick: true };
      }
      return { ...each, isClick: false };
    });

    setTodoList(updatedList);
  };

  const onClickSaveButton = (event) => {
    updatedList = todoList.map((each) => {
      if (event.target.id === each.id) {
        return { ...each, isClick: false, title: editInput };
      }
      return each;
    });

    setTodoList(updatedList);
  };

  // console.log(todoList);
  return (
    <>
      {/* <div className="text-4xl">
        Todo
        <p>
          <NavLink to="nested1">net</NavLink>
        </p>
        <p>
          <NavLink to="nested2">netdffd</NavLink>
        </p>
        <Outlet />
      </div> */}
      <div className="flex flex-col items-center  py-5 grow">
        <div className="flex justify-center bg-sky-500 h-10 w-[50%]">
          <input
            type="text"
            value={inputText}
            className="w-[100%] pl-3 bg-gray-200 text-xl"
            placeholder="Enter the Name"
            onChange={(event) => setInputText(event.target.value)}
          />
          <button
            className="bg-green-600 px-9"
            type="button"
            onClick={onClickAddButton}
          >
            Add
          </button>
        </div>

        <ul className="flex flex-col list-unstyled w-[50%] mt-7">
          {todoList.map((each) => (
            <li
              key={each.id}
              className="border my-1 p-2 flex justify-between items-center"
            >
              {each.isClick ? (
                <>
                  <input
                    type="text"
                    value={editInput}
                    className="w-[100%] pl-3 h-10 bg-gray-200 text-xl"
                    placeholder="Enter the Name"
                    onChange={(event) => setEditInput(event.target.value)}
                  />

                  <button
                    type="button"
                    id={each.id}
                    className="bg-green-400 px-4 py-2"
                    onClick={onClickSaveButton}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <p className="text-xl pl-4">{each.title}</p>
                  <div className="">
                    <button
                      type="button"
                      id={each.id}
                      className="bg-yellow-400 px-4 py-2 mr-2"
                      onClick={onClickEditButton}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      id={each.id}
                      className="bg-red-700 px-4 py-2"
                      onClick={onClickDeleteButton}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;

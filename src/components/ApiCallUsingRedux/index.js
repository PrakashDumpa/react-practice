import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  editUser,
  getData,
  saveUser,
} from "../../reduxToolkit/reducers/slicers/apiCallReduxSlicer";
import { useEffect } from "react";

const ApiCallUsingRedux = () => {
  const [inputName, setInputName] = useState("");
  const [editName, setEditName] = useState("");

  let dispatch = useDispatch();
  const { data } = useSelector((state) => state.apiCall);
  // console.log("------------------", data);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="flex flex-col items-center  py-5 grow">
      <div className="flex justify-center bg-sky-500 h-10 w-[50%]">
        <input
          type="text"
          value={inputName}
          className="w-[100%] pl-3 bg-gray-200 text-xl"
          placeholder="Enter the Name"
          onChange={(event) => setInputName(event.target.value)}
        />
        <button
          className="bg-green-600 px-9"
          type="button"
          onClick={() => {
            if (inputName) {
              dispatch(addUser(inputName));
              setInputName("");
            }
          }}
        >
          Add
        </button>
      </div>
      <ul className="flex flex-col list-unstyled w-[50%] mt-7">
        {data?.map((each) => (
          <li
            key={each.id}
            className="border my-1 p-2 flex justify-between items-center"
          >
            {each.isEdit ? (
              <>
                <input
                  type="text"
                  value={editName}
                  className="w-[100%] pl-3 h-10 bg-gray-200 text-xl"
                  placeholder="Enter the Name"
                  onChange={(event) => setEditName(event.target.value)}
                />

                <button
                  type="button"
                  id={each.id}
                  className="bg-green-400 px-4 py-2"
                  onClick={() =>
                    dispatch(saveUser({ id: each.id, title: editName }))
                  }
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
                    onClick={() => {
                      dispatch(editUser(each.id));
                      setEditName(each.title);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    id={each.id}
                    className="bg-red-700 px-4 py-2"
                    onClick={() => dispatch(deleteUser(each.id))}
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
  );
};

export default ApiCallUsingRedux;

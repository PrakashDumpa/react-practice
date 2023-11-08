import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/slicers/counterSlice";
import apiCallReduxSlicer from "../reducers/slicers/apiCallReduxSlicer";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    apiCall: apiCallReduxSlicer,
  },
});

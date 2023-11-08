import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from "uuid";

export const getData = createAsyncThunk("apiCall/getData", async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response.ok) {
      let result = await response.json();
      return result;
    } else {
      console.log("ApiFailed-------------------");
    }
  } catch (error) {
    console.log("RadheRadhe");
  }
});

let updateData;
const apiCallReduxSlicer = createSlice({
  name: "apiCall",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.data = [
        ...state.data,
        { id: uuidV4(), isEdit: false, title: action.payload },
      ];
    },
    deleteUser: (state, action) => {
      updateData = state.data.filter((e) => e.id !== action.payload);
      state.data = updateData;
    },
    editUser: (state, action) => {
      updateData = state.data.map((e) => {
        if (e.id === action.payload) {
          return { ...e, isEdit: true, title: action.payload };
        }
        return { ...e, isEdit: false };
      });
      state.data = updateData;
    },
    saveUser: (state, action) => {
      updateData = state.data.map((e) => {
        if (e.id === action.payload.id) {
          return { ...e, title: action.payload.title, isEdit: false };
        }
        return e;
      });
      state.data = updateData;
    },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      // console.log("-------------Fullfilled", action.payload);
      state.data = action.payload;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addUser, deleteUser, editUser, saveUser } =
  apiCallReduxSlicer.actions;
export default apiCallReduxSlicer.reducer;

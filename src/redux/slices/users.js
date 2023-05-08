import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll } from "redux/async/users";
import { add } from "redux/async/users";
import { getOne } from "redux/async/users";

export const users = createSlice({
  name: "users",
  initialState: { users: [] },
  extraReducers: (builder) => {
    builder.addCase(add.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      console.log(action.payload);
      state.users = action.payload;
    });
    builder.addCase(getOne.fulfilled, (state, action) => {
      console.log(action.payload);
      state.users = action.payload;
    });
  },
});

export default users.reducer;

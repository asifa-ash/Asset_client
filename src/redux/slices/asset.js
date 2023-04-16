import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll } from "redux/async/assets";
import { add } from "redux/async/assets";

export const assets = createSlice({
  name: "assets",
  initialState: { assets: [] },
  extraReducers: (builder) => {
    builder.addCase(add.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      console.log(action.payload);
      state.assets = action.payload;
    });
  },
});

export default assets.reducer;

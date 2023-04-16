import { register } from "redux/async/auth";
import { createSlice } from "@reduxjs/toolkit";
import { login } from "redux/async/auth";
import { logout } from "redux/async/auth";

const auth = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  },

  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      console.log("successful");
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = null;
    });
  },
});

export default auth.reducer;

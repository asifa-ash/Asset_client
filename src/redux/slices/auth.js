import { register } from "redux/async/auth";
import { createSlice } from "@reduxjs/toolkit";
import { login } from "redux/async/auth";
import { logout } from "redux/async/auth";

const auth = createSlice({
  name: "auth",
  initialState: {
    user:
      localStorage.getItem("user") == "undefined" || localStorage.getItem("user") == null
        ? null
        : JSON.parse(localStorage.getItem("user")),
  },

  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action.payload, "hhhhhhhnnnnnnnnnnbbbb");
      alert(action.payload?.message);
      window.location.href = "/authentication/sign-in/basic";
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

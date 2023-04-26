import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "apis/authApis";

export const register = createAsyncThunk("auth/register", async (data) => {
  
  try {
    const res=await auth.register(data);
    return res.data
 
  } catch (err) {
    console.log(err);
  }
});

export const login = createAsyncThunk("auth/login", async (data) => {
  console.log(data, "----async");
  try {
    const res = await auth.login(data);
    localStorage.setItem("user", JSON.stringify(res.data?.user));
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const logout = createAsyncThunk("auth/logout", async (data) => {
  console.log(data, "----async");
  try {
    const res = await auth.logout(data);
    localStorage.removeItem("user");

    return res.data;
  } catch (err) {
    console.log(err);
  }
});

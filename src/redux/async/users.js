import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "apis/usersApis";

export const add = createAsyncThunk("users/add", async (data) => {
  console.log(data, "----async");
  try {
    const res = await users.add(data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const getAll = createAsyncThunk("users/getAll", async (data) => {
  console.log(data, "----async");
  try {
    const res = await users.getAll(data);

    return res.data;
  } catch (err) {
    console.log(err);
  }
});

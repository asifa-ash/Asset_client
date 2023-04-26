import { createAsyncThunk } from "@reduxjs/toolkit";
import assets from "apis/assetApi";

export const add = createAsyncThunk("assets/add", async (data) => {
  console.log(data, "----async");
  try {
    const res = await assets.add(data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const getAll = createAsyncThunk("assets/getAll", async (data) => {
  console.log(data, "----async");
  try {
    const res = await assets.getAll(data);

    return res.data;
  } catch (err) {
    console.log(err);
  }
});

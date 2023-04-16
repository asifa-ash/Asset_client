import authReducer from "./slices/auth";
import usersReducer from "./slices/users";
import assetReducer from "./slices/asset"

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: { authReducer, usersReducer,assetReducer } });

import ax from "axios";

export const axios = ax.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

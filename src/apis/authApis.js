const { axios } = require("./api.config");

export const auth = {
  register: (data) => {
    return axios.post("/auth/register", data);
  },
  login: (data) => {
    return axios.post("/auth/login", data);
  },
  logout: () => {
    return axios.post("/auth/logout");
  },
};

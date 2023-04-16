const { axios } = require("./api.config");

const users = {
  add(data) {
    return axios.post("/upload", data);
  },
  getAll() {
    return axios.get("/upload/allUser");
  },
};

export default users;

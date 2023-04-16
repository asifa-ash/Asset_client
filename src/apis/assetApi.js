const { axios } = require("./api.config");

const Assets = {
  add(data) {
    return axios.post("/asset", data);
  },
  getAll() {
    return axios.get("/asset/allAsset");
  },
};

export default Assets;

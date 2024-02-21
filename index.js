// import axios from "./node_modules/axios";
const axios = require("axios");
axios.defaults.baseURL = "/api/v1";
class BasicServices {
  constructor() {}
  async getService(url, params) {
    return await axios.get(url, { params }).data;
  }
  async getTaskList(params) {
    let res = await axios.get("/fieldwork/tasks/list", { params });
    return res.data;
  }
}
export default BasicServices;

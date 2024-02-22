class BasicServices {
  constructor(axios) {
    this.$ = axios;
  }
  async getService(url, params) {
    return await this.$.get(url, { params }).data;
  }
  async getTaskList(params) {
    let res = await this.$.get("/fieldwork/tasks/list", { params });
    return res.data;
  }
}
export default BasicServices;

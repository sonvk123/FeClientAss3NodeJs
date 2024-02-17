import axiosClient from "./axiosClient";

const HistoryAPI = {
  getHistoryAPI: (query) => {
    const url = `/histories${query}`;
    return axiosClient.get(url);
  },

  getDetail: (id) => {
    const url = `/histories/historie/${id}`;
    console.log("url:", url);
    return axiosClient.get(url);
  },
};

export default HistoryAPI;

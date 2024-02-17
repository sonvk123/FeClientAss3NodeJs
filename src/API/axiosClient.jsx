// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";

let url =
process.env.REACT_APP_NODE_ENV === "production"
  ? "https://beass3nodejs.onrender.com/client"
  : "http://localhost:5000/client";


const axiosClient = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
  withCredentials: true,
});

axiosClient.interceptors.request.use(async (config) => {
  // console.log("config:", config);

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    // Xử lý response thành công
    // console.log("response:", response);
    return response.data;
  },

  (error) => {
    // Xử lý lỗi
    if (error.response) {
      // Yêu cầu được gửi và server trả về mã lỗi
      // console.error("Lỗi response:", error.response.data);
      // console.error("Mã trạng thái:", error.response.status);
      // console.error("Headers:", error.response.headers);

      // Trả về đối tượng chứa thông tin lỗi
      return {
        error: true,
        data: error.response.data,
        status: error.response.status,
        message: error.response.data.errorMessage,
        validation: error.response.data.validationErrors,
      };
    } else if (error.request) {
      // Yêu cầu được gửi nhưng không nhận được phản hồi
      // console.error("Lỗi request:", error.request);

      // Trả về đối tượng chứa thông tin lỗi
      return {
        error: true,
        message: "Không có phản hồi từ server",
      };
    } else {
      // Có lỗi khi thiết lập yêu cầu
      // console.error("Thông báo lỗi:", error.message);

      // Trả về đối tượng chứa thông tin lỗi
      return {
        error: true,
        message: "Không thể thiết lập yêu cầu",
      };
    }
  }
);

export default axiosClient;

import axiosClient from "./axiosClient";

const UserAPI = {
  // đăng ký
  postSignUp: (query) => {
    const url = `/user/signup/${query}`;
    return axiosClient.post(url);
  },

  // đăng nhập
  postSignIn: (query) => {
    const url = `/user/loginClient/${query}`;
    return axiosClient.post(url);
  },

  // đăng xuât
  getLogout: () => {
    const url = `/user/logout`;
    return axiosClient.get(url);
  },
  getDetailData: (id) => {
    const url = `/user/${id}`;
    return axiosClient.get(url);
  },
};

export default UserAPI;

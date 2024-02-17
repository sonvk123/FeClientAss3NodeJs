import axiosClient from "./axiosClient";

const ProductAPI = {
  // lấy dữ liệu Products cho trang home và all ở trang shop
  getAPI: () => {
    const url = "/getProducts";
    return axiosClient.get(url);
  },

  getCategory: (query) => {
    const url = `/products/category/${query}`;
    return axiosClient.get(url);
  },

  // lấy dữ liệu sản phẩm theo Id
  getDetail: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  getPagination: (query) => {
    const url = `/products/pagination${query}`;
    console.log("url:", url);
    return axiosClient.get(url)
  },
};

export default ProductAPI;

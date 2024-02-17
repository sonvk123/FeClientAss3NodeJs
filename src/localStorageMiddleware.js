// localStorageMiddleware.js
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  
  // Lưu dữ liệu vào Local Storage
  localStorage.setItem("reduxState", JSON.stringify(state));

  return result;
};

export default localStorageMiddleware;
import { createStore, applyMiddleware } from "redux";

import ReducerRoot from "./Redux/Reducer/ReducerRoot";

import localStorageMiddleware from "./localStorageMiddleware";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const store = createStore(
  ReducerRoot,
  loadStateFromLocalStorage(), // Load trạng thái từ Local Storage khi tạo store
  applyMiddleware(localStorageMiddleware)
);

export default store;

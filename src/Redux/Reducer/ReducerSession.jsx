const initialState = {
  idUser: "",
  isAdmin: "",
  isLogin: false,
  njs_asm3_roomId: "",
};

const ReducerSession = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SESSION":
      return {
        ...state,
        idUser: action.data.idUser,
        isAdmin: "",
        isLogin: true,
        njs_asm3_roomId: action.data.roomId,
      };

    case "DELETE_SESSION":
      return {
        ...state,
        idUser: action.data.idUser,
        isAdmin: "",
        isLogin: false,
        njs_asm3_roomId: action.data.roomId,
      };

    default:
      return state;
  }
};

export default ReducerSession;

import axiosClient from "./axiosClient";

const ChatRoomsAPI = {
  // nhận tin nhắn theo RoomId
  getMessageByRoomId: (roomId) => {
    const url = `/chatrooms/getById?roomId=${roomId}`;
    return axiosClient.get(url);
  },
  // tạo room mới
  createNewRoom: () => {
    const url = `/chatrooms/createNewRoom`;
    return axiosClient.post(url);
  },

	// thêm message
  addMessage: (body) => {
    const url = `/chatrooms/addMessage`;
    return axiosClient.put(url, body);
  },
};

export default ChatRoomsAPI;

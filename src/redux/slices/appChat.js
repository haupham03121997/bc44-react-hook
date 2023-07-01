import { createSlice } from "@reduxjs/toolkit";

const appChatSlice = createSlice({
  name: "appChat",
  initialState: {
    listMessage: [
      {
        username: "Alice",
        message: "Message 1",
      },
      {
        username: "Alice1",
        message: "Message 1",
      },
    ],
  },

  reducers: {
    addMessage: (state, { payload }) => {
      console.log("payload reducer", payload);
      // thêm payload vào listMessage
      state.listMessage.push(payload);
    },
  },
});

export const { addMessage } = appChatSlice.actions;

export default appChatSlice.reducer;

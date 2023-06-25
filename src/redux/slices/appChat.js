import { createSlice } from "@reduxjs/toolkit";

const appChatSlice = createSlice({
  name: "appChat",
  initialState: {
    listMessage: [],
  },
  reducers: {
    addMessage: (state, payload) => {},
  },
});

export const { addMessage } = appChatSlice.actions;

export default appChatSlice.reducer;

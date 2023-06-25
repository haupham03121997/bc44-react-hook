import { combineReducers } from "@reduxjs/toolkit";

import appChatSlice from "./slices/appChat";

const rootReducers = combineReducers({
  appChat: appChatSlice,
});

export default rootReducers;

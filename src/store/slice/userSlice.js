import { createSlice } from "@reduxjs/toolkit";
import { userState } from "../states/userState";
import { userReducers } from "../reducers/userReducers";

const userSlice = createSlice({
  name: 'userSlice',
  initialState: userState,
  reducers: userReducers,
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
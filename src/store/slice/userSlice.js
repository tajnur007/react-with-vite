import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: null
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    clearUserInfo: (state) => {
      state.user = null;
    }
  }
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
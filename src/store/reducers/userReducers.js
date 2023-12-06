export const userReducers = {
  setUserInfo: (state, action) => {
    state.user = action.payload;
  },
  clearUserInfo: (state) => {
    state.user = null;
  }
};
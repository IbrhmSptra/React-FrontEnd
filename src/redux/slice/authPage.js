import { createSlice } from "@reduxjs/toolkit";

const authPage = createSlice({
  name: "authPageState",
  initialState: {
    error: null,
    isLogin: true,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    toggleAuth: (state) => {
      state.isLogin = !state.isLogin;
    },
  },
});

export const { setError, clearError, toggleAuth, setLogin, setLogout } =
  authPage.actions;
export default authPage.reducer;

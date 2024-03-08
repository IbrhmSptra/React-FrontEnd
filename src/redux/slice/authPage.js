import { createSlice } from "@reduxjs/toolkit";

const authPage = createSlice({
  name: "authPageState",
  initialState: {
    error: null,
    authChange: false,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    toggleAuth: (state) => {
      state.authChange = !state.authChange;
    },
  },
});

export const { setError, clearError, toggleAuth } = authPage.actions;
export default authPage.reducer;

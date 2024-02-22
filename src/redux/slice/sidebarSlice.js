import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "isSidebarOpen",
  initialState: {
    status: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.status = !state.status;
    },
    closeSidebar: (state) => {
      state.status = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;

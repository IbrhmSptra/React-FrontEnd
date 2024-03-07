import { createSlice } from "@reduxjs/toolkit";

const webContent = createSlice({
  name: "webContentState",
  initialState: {
    sidebar: false,
    searchExpand: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    closeSidebar: (state) => {
      state.sidebar = false;
    },
    openSearchExpand: (state) => {
      state.searchExpand = true;
    },
    closeSearchExpand: (state) => {
      state.searchExpand = false;
    },
  },
});

export const {
  toggleSidebar,
  closeSidebar,
  openSearchExpand,
  closeSearchExpand,
} = webContent.actions;
export default webContent.reducer;

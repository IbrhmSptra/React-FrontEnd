import { createSlice } from "@reduxjs/toolkit";

const webContent = createSlice({
  name: "webContentState",
  initialState: {
    sidebar: false,
    searchExpand: false,
    alamat: "",
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
    setAlamat: (state, action) => {
      state.alamat = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  closeSidebar,
  openSearchExpand,
  closeSearchExpand,
  setAlamat,
} = webContent.actions;
export default webContent.reducer;

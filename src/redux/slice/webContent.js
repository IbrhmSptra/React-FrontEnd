import { createSlice } from "@reduxjs/toolkit";

const webContent = createSlice({
  name: "webContentState",
  initialState: {
    sidebar: false,
    searchExpand: false,
    alamat: "",
    modalLogout: false,
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
    openModal: (state) => {
      state.modalLogout = true;
    },
    closeModal: (state) => {
      state.modalLogout = false;
    },
  },
});

export const {
  toggleSidebar,
  closeSidebar,
  openSearchExpand,
  closeSearchExpand,
  setAlamat,
  openModal,
  closeModal,
} = webContent.actions;
export default webContent.reducer;

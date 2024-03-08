import { configureStore } from "@reduxjs/toolkit";
import webContent from "./slice/webContent";
import authPage from "./slice/authPage";

const store = configureStore({
  reducer: {
    webcontent: webContent,
    authpage: authPage,
  },
});

export default store;

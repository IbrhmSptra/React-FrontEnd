import { configureStore } from "@reduxjs/toolkit";
import webContent from "./slice/webContent";

const store = configureStore({
  reducer: {
    webcontent: webContent,
  },
});

export default store;

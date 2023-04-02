import { configureStore } from "@reduxjs/toolkit";
//reducer
import bloggers from "./slices";

export default configureStore({
  reducer: {
    bloggers,
  },
});

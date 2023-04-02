import { createSlice } from "@reduxjs/toolkit";
//axios
import axios from "axios";

export const bloggerSlice = createSlice({
  name: "bloggers",
  initialState: {
    list: [],
  },
  reducers: {
    setBloggerList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setBloggerList } = bloggerSlice.actions;

export default bloggerSlice.reducer;

export const fetchAllBloggers = () => {
  return (dispatch) => {
    axios
      .get("https://reqres.in/api/users?per_page=12")
      .then((response) => {
        dispatch(setBloggerList(response.data.data));
      })
      .catch((error) => console.log(error));
  };
};

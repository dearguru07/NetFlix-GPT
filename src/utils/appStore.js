import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./moviesSlice"

const appStore = configureStore({
  reducer: {
    user:userReducer,
    movies:MoviesReducer
  },
});

export default appStore;

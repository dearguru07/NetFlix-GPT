import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: MoviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;

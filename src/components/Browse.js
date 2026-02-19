import React, { useEffect } from "react";
import Header from "./Header";
import nowPlayingMoviesHook from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecContainer from "./SecContainer";

const Browse = () => {
  nowPlayingMoviesHook();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecContainer />
    </div>
  );
};

export default Browse;

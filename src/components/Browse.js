import React from "react";
import Header from "./Header";
import nowPlayingMoviesHook from "../hooks/nowPlayingMovies";
import MainContainer from "./MainContainer";
import SecContainer from "./SecContainer"

const Browse = () => {
  nowPlayingMoviesHook();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecContainer/>
    </div>
  );
};

export default Browse;

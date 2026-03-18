import React, { useEffect } from "react";
import Header from "./Header";
import nowPlayingMoviesHook from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecContainer from "./SecContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  nowPlayingMoviesHook();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

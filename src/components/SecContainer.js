import React from "react";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecContainer;

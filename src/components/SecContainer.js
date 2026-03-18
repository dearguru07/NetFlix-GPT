import React from "react";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-84 relative z-10 ">
          <div className="opacity-70">
            <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
          </div>
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
          <MovieList title={"Populor Movies"} movies={movies.popularMovies} />
          <MovieList title={"UpComing Movies"}movies={movies.upComingMovies} />
          {/* <MovieList title={"Comedy Movies"} movies={movies.nowPlayingMovies} /> */}
        </div>
      </div>
    )
  );
};

export default SecContainer;

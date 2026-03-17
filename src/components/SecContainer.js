import React from "react";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-94 relative z-10 ">
          <div className="opacity-70">
            <MovieList
              title={"Now Playing Movies"}
              movies={movies.nowPlayingMovies}
            />
          </div>
          <MovieList
            title={"Populor Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={"UpComing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Trending Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Comedy Movies"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Action && Drama"}
            movies={movies.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecContainer;

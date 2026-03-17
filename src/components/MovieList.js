import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6 text-white">
        <h2 className="text-2xl py-3">{title}</h2>
        <div className="flex overflow-x-scroll scrollbar-hide gap-4">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default MovieList;


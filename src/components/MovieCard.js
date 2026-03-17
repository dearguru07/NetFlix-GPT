import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-47 mr-2.5">
      <img className="" alt="movie-logo" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;

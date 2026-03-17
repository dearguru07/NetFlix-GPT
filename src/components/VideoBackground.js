import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="box-border justify-center -mr-3.5">
      <iframe
        className="w-full aspect-video object-fill"
        src={
          "https://www.youtube.com/embed/fAdo8drjc_M?si=OIt1fjOr6q5CQBh4" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1 "
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

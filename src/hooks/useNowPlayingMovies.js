import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const nowPlayingMoviesHook = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await response.json();
    // console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default nowPlayingMoviesHook;

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpComingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );
    const json = await response.json();
    dispatch(addUpComingMovies(json?.results));
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;

import React from "react";
import Header from "./Header";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
 

  const nowPlayingMovies = async () => {
     const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmQxMjdmYjJmYWEyNDUzN2E3OGIxZjcyM2RjMTkzMiIsIm5iZiI6MTc2OTg1NTA2NC4xMDYsInN1YiI6IjY5N2RkODU4NmM3MGE5YmNkZDcxOWNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NR8C7M27fd9W4tbMfe6GnhcO4IFig8BcAF96_bK8pg4",
  },
};
    const data=await fetch("https://dummyjson.com/products",API_OPTIONS);
    const json=await data.json();
    console.log(json.products)
  };
  useEffect(() => {
    nowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;

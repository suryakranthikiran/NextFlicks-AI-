import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(store => store.movies.popularMovies)
  // Fetching data from the TMDB API
  async function getPopularMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();

    // Putting data into the store
    dispatch(addPopularMovies(json?.results));
  }

  useEffect(() => {
    if (!popularMovies) getPopularMovies();

  }, []);
};
export default usePopularMovies;

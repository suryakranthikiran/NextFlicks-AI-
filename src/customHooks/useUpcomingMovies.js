import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store => store.movies.upComingMovies)
    // Fetching data from the TMDB API
    async function getuseUpcomingMovies() {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?page=1",
            API_OPTIONS
        );
        const json = await data.json();

        // Putting data into the store
        dispatch(addUpcomingMovies(json?.results));
    }

    useEffect(() => {
        if (!upComingMovies) getuseUpcomingMovies();

    }, []);

}
export default useUpcomingMovies;
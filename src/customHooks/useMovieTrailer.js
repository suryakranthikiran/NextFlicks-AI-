import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { movieTrailer } from "../utils/moviesSlice";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const trailer = useSelector(store => store.movies.trailer)

    async function getMovieVideos(params) {
        const data = await fetch(

            "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();
        const filterData = json?.results.filter((video) => {
            return video.type === "Trailer";
        });
        const trailer = filterData.length ? filterData[0] : json?.results[0];

        dispatch(movieTrailer(trailer));
    }

    useEffect(() => {
        if (!trailer) getMovieVideos();

    }, []);
}
export default useMovieTrailer;


// 976573



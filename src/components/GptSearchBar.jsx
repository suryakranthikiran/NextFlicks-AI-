import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { AI_URL, API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, removeGptMovieResult } from "../utils/gptSlice";

function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  function handleClearMovieSuggestion() {
    dispatch(removeGptMovieResult());
  }

  // Search movie in TMDB

  const fetchMovie = async (movie) => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await movieData.json();

    return json.results;
    // this function will return array of promises we need to reolve the promise using "promise.all" combinator
  };

  const handleGptSearchClick = async () => {
    if (!searchText.current || !searchText.current.value) {
      console.error("Search input is empty or not initialized.");
      return;
    }

    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}. Only give me names of 5 movies, comma-separated like the example result given ahead. Example result: Sholay, Don, Bahubali, Chaava, Golmaal`;

    const payload = {
      contents: [{ parts: [{ text: gptQuery }] }],
    };

    try {
      let response = await fetch(AI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      response = await response.json();
      const gptMovieResult =
        response.candidates?.[0]?.content?.parts?.[0]?.text
          .split(",")
          .map((movie) => movie.trim()) || [];
      // console.log("GPT Movie Results", gptMovieResult);

      // for each movie search TMDB API for all movies

      const promiseArray = gptMovieResult.map((movie) => {
        return fetchMovie(movie);
        // Array of promises will get [p1,p2,p3,p4,p5] and stored in "promiseArray need to resolve all the promises using "Promise.all combinator" "
      });
      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);
      dispatch(
        addGptMovieResult({
          movieName: gptMovieResult,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("Error fetching GPT response:", error);
    }
  };

  return (
    <div className="flex justify-center items-center  flex-col md:flex-row md:gap-7 md:p-12">
      <form
        className="w-full max-w-2xl flex items-center gap-4 bg-gray-900 p-4 rounded-lg shadow-lg mt-40 md:flex-row md:mb-36 "
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Search Input */}
        <input
          ref={searchText}
          type="text"
          placeholder={
            lang[langKey]?.gptSearchPlaceHolder || "Search for movies..."
          }
          className="flex-1 p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Search Button */}
        <button
          className="py-3 px-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search || "Search"}
        </button>
      </form>
      <button
        className="py-3 px-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 my-6 "
        onClick={handleClearMovieSuggestion}
      >
        {lang[langKey]?.clearMovie}
      </button>
    </div>
  );
}

export default GptSearchBar;

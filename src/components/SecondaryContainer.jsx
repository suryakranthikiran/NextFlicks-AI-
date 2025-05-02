import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black ">
      {/* 
    Movielist - Popular
        MovieCards * n
    Movielist - nowplaying
        MovieCards * n
    Movielist - Treding
        MovieCards * n
    Movielist - Horror
        MovieCards * n

    
    */}
      <div className="mt-0 md:-mt-32 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />

        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming movies"} movies={movies?.upComingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;

import React from "react";
import MoviCard from "./MoviCard";

function MovieList({ title, movies }) {
  if (!movies || movies.length === 0) {
    return <h1>No movies available</h1>;
  }

  return (
    <div className="px-6">
      <h1 className="text-2xl py-10 md:text-3xl md:py-4 text-white font-mono ">
        {" "}
        {title}{" "}
      </h1>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4 p-2">
        <div className="flex ">
          {movies.map((movie) => {
            return (
              <MoviCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.original_title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;

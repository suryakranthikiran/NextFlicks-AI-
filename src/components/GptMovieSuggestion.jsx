import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestion() {
  const { movieResults, movieName } = useSelector((store) => store.gpt);

  if (!movieName || movieName.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white py-10 ">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-500">
          AI Movie Suggestions 🎬
        </h2>

        <div className="space-y-8">
          {movieName.map((name, index) => (
            <div
              key={name}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-red-400">
                {name}
              </h3>
              <MovieList movies={movieResults[index]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GptMovieSuggestion;

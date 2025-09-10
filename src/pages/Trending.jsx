import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { useMovies } from "../context/MovieContext";

const Trending = () => {
  const { movies, loading } = useMovies();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-8 sm:px-12 md:px-7 lg:px-10 py-8">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
        🔥 Trending Movies
      </h1>
      {loading ? (
        <div className="flex justify-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-700 h-16 w-16"></div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie, idx) => (
            <MovieCard
              key={`${movie.imdbID}-${idx}`}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              onClick={() => setSelectedId(movie.imdbID)}
            />
          ))}
        </div>
      )}
      {selectedId && (
        <MovieModal imdbID={selectedId} onClose={() => setSelectedId(null)} />
      )}
    </div>
  );
};
export default Trending;


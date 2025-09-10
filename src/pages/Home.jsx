import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { useMovies } from "../context/MovieContext";

const Home = () => {
  const { movies, loading, error, } = useMovies();
  const [selectedId, setSelectedId] = useState(null);
  const [showError, setShowError] = useState(false);

  // Show error for 3 sec
  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-100 flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: "url('https://wallpaperaccess.com/full/317501.jpg')" }}
      >
        <div className="bg-black/50 px-4 py-5 sm:p-8 rounded-lg w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[800px]">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold mb-4 animate-pulse">🎬 Movie Explorer</h1>
          <p className="text-gray-200 text-sm sm:text-lg mb-4">
            Discover movies, see details, and explore trailers like a pro.
          </p>
          <SearchBar />
        </div>
      </header>

      {/* Movies Grid */}
      <main className="container mx-auto px-4 py-8">
        {showError && <div className="mb-6 text-red-500 text-center">{error}</div>}

        {loading && (
          <div className="flex justify-center mb-6">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-700 h-16 w-16"></div>
          </div>
        )}

        <section className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:px-0 px-6">
          {movies && movies.length > 0 ? (
            movies.map((movie, idx) => (
              <MovieCard
                key={`${movie.imdbID}-${idx}`}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                onClick={() => setSelectedId(movie.imdbID)}
              />
            ))
          ) : (
            !loading &&
            !showError && (
              <div className="mt-10 text-gray-400 col-span-full text-center">
                Try searching for "Inception", "Batman", or "Avengers".
              </div>
            )
          )}
        </section>
      </main>

      {/* Modal */}
      {selectedId && <MovieModal imdbID={selectedId} onClose={() => setSelectedId(null)} />}
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const GENRES = ["Action", "Comedy", "Horror", "Sci-Fi"];

const Genres = () => {
  const [movies, setMovies] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    GENRES.forEach((genre) => fetchByGenre(genre));
  }, []);

  const fetchByGenre = async (genre) => {
    try {
      const res = await axios.get("https://www.omdbapi.com/", {
        params: { apikey: API_KEY, s: genre },
      });
      if (res.data?.Response === "True") setMovies((prev) => ({ ...prev, [genre]: res.data.Search }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 md:px-10 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">🎬 Browse by Genre</h1>
      {GENRES.map((genre) => (
        <div key={genre} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{genre}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 overflow-x-auto gap-4 pb-2">
            {movies[genre]?.map((movie) => (
              <div key={movie.imdbID} className="min-w-[150px]">
                <MovieCard
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  onClick={() => setSelectedId(movie.imdbID)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedId && <MovieModal imdbID={selectedId} onClose={() => setSelectedId(null)} />}
    </div>
  );
}
export default Genres;
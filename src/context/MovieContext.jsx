import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const MovieContext = createContext();
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState([]);

  // Default trending for home
  const fetchTrending = async () => {
    setLoading(true);
    try {
      const trendingTitles = ["Avengers", "Inception", "Batman", "Spider-Man", "Iron Man"];
      const results = [];
      for (const title of trendingTitles) {
        const res = await axios.get("https://www.omdbapi.com/", {
          params: { apikey: OMDB_API_KEY, s: title },
        });
        if (res.data?.Response === "True") results.push(...res.data.Search);
      }
      setMovies(results);
    } catch (err) {
      console.error(err);
      setError("Failed to load trending movies");
    } finally {
      setLoading(false);
    }
  };

  // OMDb search
  const fetchMovies = async () => {
    if (!search.trim()) {
      setError("Please enter a movie name to search.");
      setMovies([]);
      // 3 sec delay ke baad trending wapas load
      setTimeout(fetchTrending, 3000);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await axios.get("https://www.omdbapi.com/", {
        params: { apikey: OMDB_API_KEY, s: search },
      });
      if (res.data?.Response === "True") {
        setMovies(res.data.Search || []);
      } else {
        setMovies([]);
        setError(res.data?.Error || "No results found");
        // 3 sec delay ke baad trending wapas load
        setTimeout(fetchTrending, 3000);
      }
    } catch (err) {
      console.error(err);
      setError("Network or API error. Check your API key and network.");
      setMovies([]);
      setTimeout(fetchTrending, 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, loading, error, search, setSearch, fetchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);


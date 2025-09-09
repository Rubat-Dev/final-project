import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const MovieContext = createContext();
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  useEffect(() => {
    fetchDefaultMovies();
    fetchTrending(); 
  }, []);

  const fetchDefaultMovies = async (p = 1) => {
    setLoading(true);
    try {
      const res = await axios.get("https://www.omdbapi.com/", {
        params: { apikey: API_KEY, s: "Avengers", page: p },
      });
      if (res.data?.Response === "True") {
        setMovies(res.data.Search || []);
        setTotalResults(Number(res.data.totalResults || 0));
        setPage(p);
        setError("");
      } else {
        setMovies([]);
        setTotalResults(0);
        setError(res.data?.Error || "");
      }
    } catch (err) {
      console.error(err);
      setError("Network or API error while fetching default movies.");
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  // fetchMovies supports pagination: call fetchMovies(newPage)
  const fetchMovies = async (newPage = 1) => {
    if (!search.trim()) {
      setError("Please enter a movie name to search.");
      setMovies([]);
      setTotalResults(0);
      return;
    }

    setError("");
    setLoading(true);
    try {
      const res = await axios.get("https://www.omdbapi.com/", {
        params: { apikey: API_KEY, s: search, page: newPage },
      });

      if (res.data?.Response === "True") {
        setMovies(res.data.Search || []);
        setTotalResults(Number(res.data.totalResults || 0));
        setPage(newPage);
        setError("");
      } else {
        setMovies([]);
        setTotalResults(0);
        setError(res.data?.Error || "No results found");
      }
    } catch (err) {
      console.error(err);
      setError("Network or API error. Check your API key and network.");
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

   // ✅ New trending function in context
   const fetchTrending = async () => {
    setLoading(true);
    try {
      const trendingTitles = ["Avengers", "Inception", "Batman", "Spider-Man", "Iron Man"];
      const results = [];
      for (const title of trendingTitles) {
        const res = await axios.get("https://www.omdbapi.com/", {
          params: { apikey: API_KEY, s: title },
        });
        if (res.data?.Response === "True") results.push(...res.data.Search);
      }
      setMovies(results);
    } catch (err) {
      setError("Failed to load trending movies");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <MovieContext.Provider
      value={{
        movies,
        loading,
        error,
        search,
        setSearch,
        fetchMovies,
        page,
        totalResults,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);

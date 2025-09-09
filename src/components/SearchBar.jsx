import React from "react";
import { Search } from "lucide-react";
import { useMovies } from "../context/MovieContext";

const SearchBar = () => {
  const { search, setSearch, fetchMovies } = useMovies();

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      {/* Input */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchMovies()}
        placeholder="Search for a movie..."
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
      />

      {/* Button */}
      <button
        onClick={fetchMovies}
        className="w-fit flex items-center mx-auto gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-md hover:from-purple-600 hover:to-blue-600 transition"
      >
        <Search className="w-4 h-4" />
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchBar;

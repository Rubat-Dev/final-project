import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const NO_POSTER = "https://via.placeholder.com/300x450?text=No+Poster";

const MovieModal = ({ imdbID, onClose }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!imdbID) return;
    setLoading(true);
    setDetails(null);
    axios
      .get("https://www.omdbapi.com/", { params: { apikey: API_KEY, i: imdbID, plot: "full" } })
      .then((res) => {
        if (res.data?.Response === "True") setDetails(res.data);
        else setDetails(null);
      })
      .catch(() => setDetails(null))
      .finally(() => setLoading(false));
  }, [imdbID]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="
          relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl
          w-full max-w-4xl mx-4 sm:mx-6 md:mx-10 overflow-y-auto max-h-[90vh]
        "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-red-700 text-xl font-bold px-3 py-1 z-10"
        >
          ✕
        </button>

        {/* Loading */}
        {loading && <div className="p-6 text-center">Loading...</div>}

        {/* Movie details */}
        {!loading && details && (
          <div className="p-6 flex flex-col md:flex-row md:gap-6">
            <img
              src={details.Poster !== "N/A" ? details.Poster : NO_POSTER}
              alt={details.Title}
              className="w-full md:w-1/3 object-contain rounded-lg mb-4 md:mb-0"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">
                {details.Title} <span className="text-sm text-gray-500">({details.Year})</span>
              </h2>
              <p className="mt-2 text-gray-600">{details.Plot}</p>

              <ul className="mt-4 text-sm text-gray-700 space-y-1">
                <li><strong>Genre:</strong> {details.Genre}</li>
                <li><strong>Director:</strong> {details.Director}</li>
                <li><strong>Actors:</strong> {details.Actors}</li>
                <li><strong>IMDB Rating:</strong> {details.imdbRating}</li>
                <li><strong>Runtime:</strong> {details.Runtime}</li>
                <li><strong>Language:</strong> {details.Language}</li>
              </ul>

              <div className="mt-4">
                <a
                  href={`https://www.imdb.com/title/${details.imdbID}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded hover:from-purple-600 hover:to-blue-600 transition"
                >
                  Open on IMDB
                </a>
              </div>
            </div>
          </div>
        )}

        {!loading && !details && <div className="p-6 text-center">Details not available.</div>}
      </motion.div>
    </div>
  );
};

export default MovieModal;

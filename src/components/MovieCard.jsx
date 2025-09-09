import React from "react";
const NO_POSTER = "https://via.placeholder.com/300x450?text=No+Poster";

const MovieCard = ({ title, year, poster, onClick }) => {
  const img = poster && poster !== "N/A" ? poster : NO_POSTER;
  return (
    <div
      onClick={onClick}
      className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition cursor-pointer"
    >
      <img src={img} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-300">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;

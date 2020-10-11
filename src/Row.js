import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./row.css";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargerRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const imgURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* Containers */}
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargerRow && "row_posterLarge"}`}
            src={`${imgURL}${
              isLargerRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

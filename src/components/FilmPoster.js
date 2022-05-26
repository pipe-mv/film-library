import React from "react";

// Step8
export default function FilmPoster(props) {
  const posterUrl = "https://image.tmdb.org/t/p/w780/" + props.film.poster_path;

  return (
    <div>
      <img src={posterUrl} alt="" />
    </div>
  );
}

import React from "react";

//Step 2
export default function FilmDetails(props) {
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.films.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w780/${props.films.poster_path}`;

  let details = !props.films.id ? (
    <div className="film-detail">
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
    </div>
  ) : (
    <div className="film-detail is-hydrated">
      <figure className="film-backdrop">
        <img src={backdropUrl} alt="" />
        <h1 className="film-title">{props.films.title}</h1>
      </figure>

      <div className="film-meta">
        <h2 className="film-tagline">{props.films.tagline}</h2>
        <p className="film-detail-overview">
          <img
            src={posterUrl}
            className="film-detail-poster"
            alt={props.films.title}
          />
          {props.films.overview}
        </p>
      </div>
    </div>
  );

  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
      {details}
    </div>
  );
}

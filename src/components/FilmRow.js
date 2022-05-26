import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

//Step6
export default function FilmRow(props) {
  const date = new Date(props.film.release_date);
  // console.log(date);
  const year = date.getFullYear();

  return (
    <div
      className="film-row"
      onClick={() => props.onDetailsClick(props.film.title, props.film.id)}
    >
      {/* Step 8 */}
      <FilmPoster film={props.film} />

      <div className="film-summary">
        {/* Step 7 */}
        <h1>{props.film.title}</h1>
        <p>{year}</p>
      </div>
      <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave} />
    </div>
  );
}

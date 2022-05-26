import React, { Component } from "react";
import "./App.css";
import FilmListing from "./components/FilmListing";
import FilmDetails from "./components/FilmDetails";
import TMDB from "./TMDB";

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
    };
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex === -1) {
      faves.push(film);
      // console.log(`Adding ${film.title} to the faves...!`);
    } else {
      faves.splice(filmIndex, 1);
      // console.log(`Removing ${film.title} from faves...!`);
    }

    this.setState({
      faves: faves,
    });
    // The above is exactly the same as this.setState({faves}).
    // console.log(faves);
    // this.handleClick = this.handleClick.bind(this);
  };

  handleDetailsClick = (film, id) => {
    // console.log(`Fetching details for ${film}`);
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data); // Take a look at what you get back.
        this.setState({
          current: data,
        });
      });
  };

  render() {
    return (
      //Step 1

      <div className="film-library">
        <FilmListing
          //Step 3
          films={this.state.films}
          faves={this.state.faves}
          onFaveToggle={this.handleFaveToggle}
          onDetailsClick={this.handleDetailsClick}
        />

        <FilmDetails
          //Step 3
          films={this.state.current}
        />
      </div>
      // </div>
    );
  }
}

export default App;

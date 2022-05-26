import React, { Component } from "react";
import FilmRow from "./FilmRow";

//Step 2
export default class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
      films: props.films,
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick = (option) => {
    // console.log(`Setting filter to ${option}`);

    this.setState({
      filter: option,
      films: this.state.filter === "all" ? this.props.films : this.props.faves,
    });
  };
  render() {
    //Step 5
    // let allFilms = this.props.films.map((film, index) =>

    //     <h1 key= {index} >{film.title}</h1>
    // )

    // console.log(this.state.films);
    // Step 6
    const filmRow = this.state.films.map((film) => (
      <FilmRow
        key={film.id}
        id={film.id}
        film={film}
        onFaveToggle={() => this.props.onFaveToggle(film)}
        isFave={this.props.faves.includes(film)}
        onDetailsClick={this.props.onDetailsClick}
      />
    ));

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${
              this.state.filter === "all" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              this.state.filter === "faves" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
        {/* Step4
                    <h1>it</h1> */}
        {/* {allFilms} */}
        {/* {
                        TMDB.films.map((film, index) => (
                            <h1 key= {index} >{film.title}</h1>
                        ))
                    } */}
        {filmRow}
      </div>
    );
  }
}

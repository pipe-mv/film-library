import React, { Component } from "react";

export default class Fave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFave: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    // console.log("handling Fave click!");

    // Add this line. You'll call the function passed through props.
    this.props.onFaveToggle();

    // Delete the `setState` line. You no longer track state here.
    // this.setState({isFave: !this.state.isFave});
  }

  render() {
    const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
        <p className="material-icons">{isFave}</p>
      </div>
    );
  }
}

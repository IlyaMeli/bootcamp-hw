import React, { Component } from "react";

export default class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="card-wrapper"
        style={{
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <div>{this.props.name}</div>
        <div>{this.props.birthday}</div>
        <div> {` ${this.props.favoriteMeats} `}</div>
        <div> {` ${this.props.favoriteFish} `}</div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="img" src={this.props.img} />
        <div className="title">{this.props.title}</div>
        <div>{this.props.description}</div>
        <div className="links">
          <a href="#">{` ${this.props.link1} `}</a>
          <a href="#">{` ${this.props.link2} `}</a>
        </div>
      </div>
    );
  }
}

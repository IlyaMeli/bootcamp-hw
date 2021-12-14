import React, { Component } from "react";

export default class Box extends Component {
  render() {
    const mystyle = {
      width: this.props.size,
      height: this.props.size,
      backgroundColor: "magenta",
      margin: "5px",
      animation: "animation 1s ease-in-out",
      translateX: "0px",
      display: this.props.reveal,
    };

    return <div style={mystyle}></div>;
  }
}

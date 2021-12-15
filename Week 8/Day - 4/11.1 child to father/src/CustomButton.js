import React, { Component } from "react";

export default class CustomButton extends Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.callback(this.props.color);
        }}
        className="btn"
        style={{ backgroundColor: this.props.color }}
      >
        {" "}
        {this.props.color}
      </div>
    );
  }
}

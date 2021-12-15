import React, { Component } from "react";

export default class CustomButton extends Component {
  render() {
    return (
      <div class="btn" style={{ backgroundColor: this.props.color }}>
        {" "}
        {this.props.color}
      </div>
    );
  }
}

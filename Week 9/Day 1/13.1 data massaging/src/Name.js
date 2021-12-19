import React, { Component } from "react";

export default class Name extends Component {
  renderNames = () => {
    return this.props.namesArr.map((name, i) => {
      return (
        <div key={i}>
          <h1>{name}</h1>
        </div>
      );
    });
  };

  render() {
    return <>{this.renderNames()}</>;
  }
}

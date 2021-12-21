import React, { Component } from "react";

export default class ProductDetails extends Component {
  render() {
    const { title, imageUrl, price, size } = this.props;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

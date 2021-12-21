import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../store.js";
import ProductDetails from "./ProductDetails.js";

export default class Products extends Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data });
  }

  createProduct = () => {
    const { data } = this.state;
    return data.map((item) => {
      return (
        <div key={item.id}>
          <ProductDetails
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            size={item.size}
          />
        </div>
      );
    });
  };

  createLinks = () => {
    const { data } = this.state;
    return data.map((item) => {
      return (
        <div key={item.id}>
          <Link to={item.id}>{item.title}</Link>;
        </div>
      );
    });
  };

  render() {
    // return <div>{this.createLinks()}</div>;
    return <div>{this.createProduct()}</div>;
  }
}

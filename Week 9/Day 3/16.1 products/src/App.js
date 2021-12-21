import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/" exact component={HomePage} />
            <Route path="/products/" component={Products} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

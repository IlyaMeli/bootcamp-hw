import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { favoriteColor: "magenta" };

  componentDidMount() {
    setTimeout(() => this.setState({ favoriteColor: "red" }), 1000);
  }

  componentDidUpdate() {
    document.getElementById("element").textContent = this.state.favoriteColor;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <div id="element"></div>
      </div>
    );
  }
}

export default App;

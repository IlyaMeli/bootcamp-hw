import React, { Component } from "react";
import "./App.css";

class App extends Component {
  createInputs = () => {
    return this.checkbox.map((checkbox) => {
      return <input type="checkbox" checked={checkbox.status} />;
    });
  };

  render() {
    return <div>{this.createInputs()}</div>;
  }
}

export default App;

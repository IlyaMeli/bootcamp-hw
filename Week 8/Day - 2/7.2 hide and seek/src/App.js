import React, { Component } from "react";
import "./App.css";
import Box from "./Box";

class App extends Component {
  state = { display: "none" };

  componentDidMount() {
    setTimeout(() => this.setState({ display: "block" }), 1000);
  }

  componentDidUpdate() {
    setTimeout(() => this.setState({ display: "none" }), 4000);
  }

  render() {
    return (
      <div>
        <Box size="100px" reveal={this.state.display} />
        <Box size="70px" reveal={this.state.display} />
        <Box size="50px" reveal={this.state.display} />
      </div>
    );
  }
}

export default App;

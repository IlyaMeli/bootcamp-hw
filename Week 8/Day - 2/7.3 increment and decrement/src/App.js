import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, color: "black" };
  }
  Increment = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
    if (this.state.count >= 0) {
      this.setState({ color: "green" });
    }
    if (this.state.count === -1) {
      this.setState({ color: "black" });
    }
  };
  decrement = () => {
    if (this.state.count > -10) {
      this.setState({ count: this.state.count - 1 });
      if (this.state.count <= 0) {
        this.setState({ color: "red" });
      }
      if (this.state.count === 1) {
        this.setState({ color: "black" });
      }
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.Increment}>Increment</button>
        <label
          style={{
            color: this.state.color,
          }}
        >
          {this.state.count}
        </label>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export default App;

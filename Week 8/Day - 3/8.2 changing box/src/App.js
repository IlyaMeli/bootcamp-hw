import React, { Component } from "react";
import "./App.css";
const randomColor = ["red", "green", "blue", "yellow", "purple", "orange"];
class App extends Component {
  state = { color: "magenta", counter: 0, clasState: "container" };

  componentDidMount() {
    this.setState({ counter: 0 });
  }

  componentWillUpdate() {
    setTimeout(() => {
      this.setState({
        color: randomColor[Math.floor(Math.random() * randomColor.length)],
        counter: this.state.counter + 1,
      });
    }, 500);
    if (this.state.counter === 5) {
      this.setState({ clasState: "circle" });
    }
  }

  render() {
    return (
      <div>
        <div
          className={this.state.clasState}
          style={{ backgroundColor: this.state.color }}
        ></div>
      </div>
    );
  }
}

export default App;

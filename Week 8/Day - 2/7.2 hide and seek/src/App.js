import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: false, display: "none" };
  }

  showCard = () => {
    this.setState({ hidden: !this.state.hidden });
    this.state.hidden
      ? this.setState({ display: "none" })
      : this.setState({ display: "block" });
  };

  render() {
    return (
      <div>
        <button onClick={this.showCard} className="btn">
          Show Card
        </button>
        <div
          className="box"
          style={{
            backgroundColor: "blue",
            height: "100px",
            width: "100px",
            display: `${this.state.display}`,
          }}
        ></div>
      </div>
    );
  }
}

export default App;

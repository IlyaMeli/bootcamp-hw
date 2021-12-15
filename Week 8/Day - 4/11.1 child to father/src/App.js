import React, { Component } from "react";
import "./App.css";
import CustomButton from "./CustomButton";

class App extends Component {
  colors = ["blue", "red", "yellow"];
  state = { colorState: "" };

  handleClickEvent = (e) => {
    this.setState({ colorState: e.target.textContent });
  };

  createBtns = () => {
    return this.colors.map((item) => <CustomButton color={item} />);
  };

  render() {
    return (
      <div onClick={this.handleClickEvent}>
        {this.createBtns()}
        <div>Chosen color: {this.state.colorState}</div>
      </div>
    );
  }
}

export default App;

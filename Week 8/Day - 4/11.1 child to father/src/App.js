import React, { Component } from "react";
import "./App.css";
import CustomButton from "./CustomButton";

class App extends Component {
  colors = ["blue", "red", "yellow"];
  state = { colorState: "" };

  handleClickEvent = (item) => {
    this.setState({ colorState: item });
  };

  createBtns = () => {
    return this.colors.map((item) => (
      <CustomButton callback={this.handleClickEvent} color={item} />
    ));
  };

  render() {
    return (
      <div>
        {this.createBtns()}
        <div>Chosen color: {this.state.colorState}</div>
      </div>
    );
  }
}

export default App;

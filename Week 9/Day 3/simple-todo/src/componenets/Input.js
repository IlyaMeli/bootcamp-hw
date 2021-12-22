import React, { Component } from "react";

export default class Input extends Component {
  state = { data: [], inputValue: "" };

  handleInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  handleCreate = () => {
    const { inputValue } = this.state;
    const newObj = { title: inputValue, isDone: true };
    let newArr = [...this.state.data].push(newObj);
    let newState = { data: [newArr], inputValue: " " };
    this.setState(newState);
  };

  render() {
    return (
      <>
        {console.log(this.state)}
        <input type="text" onChange={this.handleInput} />
        <button onClick={this.handleCreate}>ADD</button>
        <div>{this.state.data}</div>
        <button>DELETE</button>
        <button>UPDATE</button>
      </>
    );
  }
}

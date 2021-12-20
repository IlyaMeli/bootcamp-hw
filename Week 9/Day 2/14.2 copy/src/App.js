import React, { Component } from "react";
import "./App.css";

class App extends Component {
  textAreaRef = React.createRef();

  handleClick = () => {
    this.textAreaRef.current.select();
    document.execCommand("copy");
  };
  render() {
    return (
      <div>
        <textarea ref={this.textAreaRef} defaultValue="check"></textarea>
        <button onClick={this.handleClick}>Copy</button>
      </div>
    );
  }
}

export default App;

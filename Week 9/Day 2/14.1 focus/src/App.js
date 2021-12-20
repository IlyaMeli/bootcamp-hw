import React, { Component } from "react";
import "./App.css";

class App extends Component {
  myRef = React.createRef();

  componentDidMount() {
    this.myRef.current.focus();
  }
  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" />
      </div>
    );
  }
}

export default App;

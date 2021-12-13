import React, { Component } from "react";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0}
  }
  incrementCounter = ()=>{
    this.setState({counter: this.state.counter + 1});
  }
  render() {

    return(
      <div>
        <button onClick={this.incrementCounter} className="btn">Increment</button>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}

export default App;

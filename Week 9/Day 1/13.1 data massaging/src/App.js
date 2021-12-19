import React, { Component } from "react";
// import axios from "axios";
import "./App.css";
import { getNames } from "./data.js";
import { getBefore1990 } from "./data.js";
import Name from "./Name.js";
import Card from "./Card.js";

class App extends Component {
  state = {
    names: getNames(),
    objectsBefore90: getBefore1990(),
  };

  renderCards = () => {
    return this.state.objectsBefore90.map((obj) => {
      console.log(obj);
      return (
        <Card
          name={obj.name}
          birthday={obj.birthday}
          favoriteMeats={obj.favoriteFoods.meats}
          favoriteFish={obj.favoriteFoods.fish}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <Name namesArr={this.state.names} />
        {this.renderCards()}
      </div>
    );
  }
}

export default App;

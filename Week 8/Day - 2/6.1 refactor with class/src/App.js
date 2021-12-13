import React, { Component } from "react";
import "./App.css";
import Card from "./Card.js";

class App extends Component {
  render() {
    return (
      <div className="card-container">
        <Card
          img={
            "https://i.picsum.photos/id/344/200/300.jpg?hmac=hFZM-uJoRMyNATe_kjGvS2NGGP60jqqP64vpGQ98VAo"
          }
          title="Card 1~"
          description="Description Card 1"
          link1="google"
          link2="moodle"
        ></Card>
        <Card
          img={
            "https://i.picsum.photos/id/300/200/300.jpg?hmac=Xi1dg4LbyPZg1QtWl3o5UaAR1CehsYO-4N8JxiSr4Vo"
          }
          title="Card 2~"
          description="blah blahblah blah blah"
          link1="something"
          link2="somethingElse"
        ></Card>
        <Card
          img={
            "https://i.picsum.photos/id/7/200/300.jpg?hmac=_vgE8dZdzp3B8T1C9VrGrIMBkDOkFYbJNWqzJD47xNg"
          }
          title="Card 3~"
          description="Description Card 3"
          link1="hwzone"
          link2="amazon"
        ></Card>
      </div>
    );
  }
}

export default App;

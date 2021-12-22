import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Avatar from "./componenets/Avatar";
import Input from "./componenets/Input";
import avatarApi from "./api";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = { data: [], name: "", imgUrl: "" };

  async componentDidMount() {
    const { data } = await avatarApi.get("avatars");
    this.setState({ data });
  }
  handleCreate = async () => {
    let dataCopy = [...this.state.data];
    const newAvatar = {
      id: uuidv4(),
      name: this.state.name,
      imgUrl: this.state.imgUrl,
    };
    try {
      const res = await avatarApi.post("avatars/", { newAvatar });
    } catch (error) {}
    dataCopy.push(newAvatar);
    this.setState({ data: dataCopy });
  };

  handleInput = (objProp, e) => {
    this.setState({ [objProp]: e });
  };

  displayDataFromState = () => {
    const { data } = this.state;
    return data.map((obj) => {
      return (
        <div key={obj.id}>
          <Avatar id={obj.id} name={obj.name} imgUrl={obj.imgUrl} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <Input
          onChange={(e) => {
            this.handleInput("name", e.target.value);
          }}
          label="name"
        />
        <Input
          onChange={(e) => {
            this.handleInput("imgUrl", e.target.value);
          }}
          label="imgUrl"
        />
        <button onClick={this.handleCreate}>Create</button>
        {this.displayDataFromState()}
      </div>
    );
  }
}

export default App;

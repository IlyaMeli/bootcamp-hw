import React, { Component } from "react";
import "./App.css";
import Avatar from "./componenets/Avatar";
import Input from "./componenets/Input";
import avatarApi from "./api";

class App extends Component {
  state = { data: [], name: "", imgUrl: "" };

  async componentDidMount() {
    const { data } = await avatarApi.get("avatars");
    this.setState({ data });
  }
  handleCreate = async () => {
    try {
      let dataCopy = [...this.state.data];
      const newAvatar = {
        name: this.state.name,
        imgUrl: this.state.imgUrl,
      };
      await avatarApi.post("/avatars/", newAvatar);
      dataCopy.push(newAvatar);
      this.setState({ data: dataCopy });
    } catch (error) {}
  };

  handleDelete = async (id) => {
    try {
      const dataCopy = [...this.state.data];
      const filteredData = dataCopy.filter((obj) => obj.id !== id);
      await avatarApi.delete(`/avatars/${id}`);
      this.setState({ data: filteredData });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleUpdate = async (id, value) => {
    const dataCopy = [...this.state.data];
    let objIdx = dataCopy.findIndex((element) => {
      return element.id === id;
    });
    // const updatedItem ={
    //   name: value,
    //   imgUrl,
    // }
    dataCopy[objIdx].name = value;
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
          <Avatar
            Delete={() => {
              this.handleDelete(obj.id);
            }}
            Update={() => {
              this.handleUpdate(obj.id, this.state.name);
            }}
            name={obj.name}
            imgUrl={obj.imgUrl}
          />
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

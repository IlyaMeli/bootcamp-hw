import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    data: null,
    categories: [],
    isLoading: false,
    searchJokeArr: null,
    inputValue: "",
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categories: data });
  }

  createCategory = () => {
    return this.state.categories.map((category, i) => {
      return (
        <div key={i}>
          <button
            onClick={() => {
              this.getJokeFromCategory(category);
            }}
          >
            {category}
          </button>
        </div>
      );
    });
  };

  getJokeFromCategory = async (category) => {
    this.setState({ isLoading: true });
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    this.setState({ data: response.data.value, isLoading: false });
  };

  handleJoke = async () => {
    this.setState({ isLoading: true });
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ data: response.data.value, isLoading: false });
  };
  handleSearch = async (inputValue) => {
    this.setState({ isLoading: true });
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${inputValue}`
    );
    console.log(data.result);
    this.setState({ searchJokeArr: data.result });
  };

  handleSearchJokesArr = () => {};

  createValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.categories && this.createCategory()}
        <button onClick={this.handleJoke}> Generate Joke</button>
        {this.state.isLoading ? (
          <div>LOADING...</div>
        ) : (
          <div className="joke">{this.state.data}</div>
        )}
        <input onChange={this.createValue} />
        <button
          onClick={() => {
            this.handleSearch(this.state.inputValue);
          }}
        >
          SUBMIT
        </button>
      </div>
    );
  }
}

export default App;

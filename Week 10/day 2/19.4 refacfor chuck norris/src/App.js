import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [myJoke, setMyJoke] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    setCategoryData(data);
    setLoading(false);
  }, []);

  const createCategory = () => {
    return categoryData.map((category, i) => {
      return (
        <div key={i}>
          <button
            onClick={() => {
              getJokeFromCategory(category);
            }}
          >
            {category}
          </button>
        </div>
      );
    });
  };
  const getJokeFromCategory = async (category) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    setMyJoke(data.value);
    console.log(data.value);
    setLoading(false);
  };

  return (
    <>
      {categoryData && createCategory()}
      {isLoading ? <div>Loading...🍤</div> : <div>{myJoke}</div>}
    </>
  );
}

export default App;

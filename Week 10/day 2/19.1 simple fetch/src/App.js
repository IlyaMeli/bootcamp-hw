import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get(
        "https://61c310fb9cfb8f0017a3e935.mockapi.io/avatars"
      );
      setData(data[0]);
    } catch (error) {}
  }, []);
  console.log(data);
  return (
    <div className="App">
      <h1>{data.title}</h1>
      <h1>{data.director}</h1>
    </div>
  );
}

export default App;

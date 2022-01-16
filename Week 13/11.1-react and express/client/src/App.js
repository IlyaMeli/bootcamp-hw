import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [backData, setBackData] = useState([{}]);
  const [inputText, setInputText] = useState("");

  const handleApi = async (address) => {
    const { data } = await axios.get(
      `http://localhost:5000/weather?address=${address}`
    );
    setBackData(data);
    console.log(data);
  };
  const handleSubmit = () => {
    handleApi(inputText);
  };

  return (
    <div className="App">
      <label>Choose Country:</label>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        type="text"
      ></input>
      <button onClick={handleSubmit}>Submit</button>
      {backData && (
        <>
          <div>
            <h3>Forecast:</h3> {backData.forecast}
          </div>
          <div>
            <h3>Location:</h3> {backData.location}
          </div>
          <div>
            <h3>Address:</h3> {backData.address}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

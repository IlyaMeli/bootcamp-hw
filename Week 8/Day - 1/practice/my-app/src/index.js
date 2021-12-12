import react from "react";
import reactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <label>Enter Name:</label>
      <input type="text" />
      <button style={{ backgroundColor: "green" }}>SUBMIT</button>
    </div>
  );
};

reactDOM.render(<App />, document.querySelector("#root"));

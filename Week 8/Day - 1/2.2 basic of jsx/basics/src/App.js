function App() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = `I love React!`;
  return (
    <div className="App">
      <div>{`${data[0]} ${data[1]}`}</div>
      <div>{`${number1} + ${number2} = ${number1 + number2}`}</div>
      <div>{`The string length is ${string.length}`}</div>
    </div>
  );
}

export default App;

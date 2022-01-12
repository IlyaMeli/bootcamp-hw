const express = require("express");

let numbersArr = [1, 2, 3, 4, 5, 6];

const app = express();
app.use(express.json());

app.get("/numbers", (req, res) => {
  res.send(numbersArr);
});

app.post("/numbers/", (req, res) => {
  const newNumber = req.body.number;
  numbersArr.push(newNumber);
  res.status(200).send(numbersArr);
});

app.delete("/numbers/:number", (req, res) => {
  console.log(req.params.number);
  numbersArr = numbersArr.filter((n) => n !== parseInt(req.params.number));
  res.status(200).send(req.params.id);
});
app.put("/numbers/:number", (req, res) => {
  let num = parseInt(req.params.number);
  let idx = numbersArr.findIndex((n) => n === num);
  numbersArr[idx] = req.body.number;
  res.status(200).send(req.params.number);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Connected to port " + PORT);
});

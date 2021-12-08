const submit = document.querySelector("button");
const input = document.querySelector("input");
const API_KEY = "54fa0a27";

const getMovieData = async () => {
  const response = await fetch(
    `http://www.omdbapi.com/?t=${input.value}&apikey=${API_KEY}&`
  );
  let data = await response.json();
  console.log(data);
};

submit.addEventListener("click", getMovieData);

const createMovieCard = (data) => {
  let card = document.createElement("div");
  let title = document.createElement("h2");
  let title = document.createElement("h2");
  let img = document.createElement("img");
};

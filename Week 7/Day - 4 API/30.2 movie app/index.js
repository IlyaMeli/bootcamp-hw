const submit = document.querySelector("button");
const movieContainer = document.querySelector(".movie-container");
const input = document.querySelector("input");
const API_KEY = "54fa0a27";

const getMovieData = async () => {
try {
  const response = await fetch(
    `http://www.omdbapi.com/?t=${input.value}&apikey=${API_KEY}&`,{mode: 'cors'}

  );
  let data = await response.json();
  console.log(data);
  if(data.Response === "False"){
    throw new Error(data.Error)
  }
  else{
    createMovieCard(data);

  }
} catch (error) {
  console.log(error);
  showError(error);
}
};


submit.addEventListener("click", getMovieData);

const createMovieCard = (data) => {
  movieContainer.innerHTML ="";
  input.innerHTML = "";
  let card = document.createElement("div");
  let img = document.createElement("img");
  let title = document.createElement("h2");
  let ul = document.createElement("ul");
  let genre = document.createElement("li")
  let year = document.createElement("li")
  let plot = document.createElement("li")
  let director = document.createElement("li")
  let actor = document.createElement("li")
  let rating = document.createElement("li")
  title.textContent = data.Title;
  genre.textContent = "Genre :"+data.Genre;
  year.textContent= "Year :"+data.Year;
  plot.textContent = "Plot :"+data.Plot;
  director.textContent= "Director :"+data.Director;
  actor.textContent = "Actors :"+data.Actors;
  rating.textContent = "Rating :"+data.imdbRating;
  img.src =`${data.Poster}`
  ul.appendChild(genre);
  ul.appendChild(year);
  ul.appendChild(plot);
  ul.appendChild(director);
  ul.appendChild(actor);
  ul.appendChild(rating)
  card.appendChild(title);
  card.appendChild(img)
  card.appendChild(ul);
  movieContainer.appendChild(card);

};

const showError = (error) => {
  let errorText = document.createElement("div");
  errorText.innerHTML = error;
  movieContainer.innerHTML = "";
  movieContainer.appendChild(errorText);

}
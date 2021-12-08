const input = document.querySelector(".search");
const errorStatus = document.querySelector(".status");
const submit = document.querySelector(".submit");
const content = document.querySelector(".content");
content.style.display = "flex";
content.style.gap = "10px";

const myUsers = [];

const getUser = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${input.value}`);
    if (!response.ok) {
      let error = await response.json();
      console.log(error.message);
      throw new Error(error.message);
    }
    const data = await response.json();
    if (!myUsers.includes(data.login)) {
      createUser(data);
      myUsers.push(data.login);
    } else {
      throw new Error(`${data.login} allready exists`);
    }
  } catch (error) {
    displayError(`${error}`);
  }
};

const displayError = (status) => {
  errorStatus.innerHTML = "";
  let h2 = document.createElement("h2");
  h2.textContent = `${status}`;
  errorStatus.appendChild(h2);
};

const createUser = (data) => {
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let h4 = document.createElement("h4");
  let card = document.createElement("div");
  card.style.padding = "10px";
  card.style.textAlign = "center";
  card.style.border = "2px solid grey";
  img.width = "230";
  img.src = data.avatar_url;
  h2.textContent = data.name;
  h4.textContent = `Repos :${data.public_repos}`;
  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(h4);
  content.appendChild(card);
  errorStatus.textContent = "";
};

submit.addEventListener("click", () => {
  getUser();
  input.value = "";
});
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getUser();
    input.value = "";
  }
});

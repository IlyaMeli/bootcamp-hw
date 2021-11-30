const letterPickedContainer = document.querySelector(
  ".letter-picked-container"
);
const gameStatus = document.querySelector(".game-status");
const qBox = document.querySelector(".question-box");
const playAgian = document.querySelector(".play-agian");

const randomLetter = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
};

const checkDuplicates = (letter, array) => {
  return array.includes(letter);
};

const checkAnswer = (letter, random) => {
  return letter === random;
};

const validEvent = (char) => {
  return /[a-zA-Z]/.test(char) && char.length === 1;
};

let random = randomLetter();

playAgian.addEventListener("click", () => {
  random = randomLetter();
  game();
});

let lettersArray = [];

const game = () => {
  letterPickedContainer.innerHTML = "";
  gameStatus.style.color = "black";
  playAgian.style.visibility = "hidden";
  playAgian.style.opacity = "0";
  gameStatus.innerHTML = "Guess a letter";
  qBox.innerHTML = "?";
  console.log("THE KEY IS: " + random);
};

window.addEventListener("keydown", (e) => {
  let isWon = false;
  let letter = e.key.toLowerCase();
  if (!isWon) {
    if (validEvent(letter)) {
      console.log(letter);
      if (checkAnswer(letter, random)) {
        qBox.innerHTML = letter;
        gameStatus.innerHTML = "Right Answer!";
        gameStatus.style.color = "green";
        isWon = true;
        playAgian.style.visibility = "visible";
        playAgian.style.opacity = "1";
        letterPickedContainer.innerHTML = "";
      } else {
        if (!checkDuplicates(letter, lettersArray)) {
          lettersArray.push(letter);
          letterPickedContainer.innerHTML = lettersArray;
          gameStatus.innerHTML = "Nope, wrong letter";
          gameStatus.style.color = "red";
        } else {
          gameStatus.innerHTML = `${letter} is already been guessed!`;
          gameStatus.style.color = "red";
        }
      }
    } else {
      gameStatus.innerHTML = "Please enter a valid letter";
      gameStatus.style.color = "red";
    }
  }
});

game();

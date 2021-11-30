const letterPickedContainer = document.querySelector(
  ".letter-picked-container"
);
const gameStatus = document.querySelector(".game-status");
const qBox = document.querySelector(".question-box");
const playAgian = document.querySelector(".play-agian");

const validEvent = (char) => {
  return /[a-zA-Z]/.test(char) && char.length === 1;
};
const randomLetter = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
};
const gameReset = () => {
  playAgian.addEventListener("click", () => {
    game();
  });
};

const checkDuplicates = (item, array) => {
  return array.includes(item);
};

const game = () => {
  letterPickedContainer.innerHTML = " ";
  gameStatus.style.color = "black";
  playAgian.style.visibility = "hidden";
  playAgian.style.opacity = "0";
  gameStatus.innerHTML = "Guess a letter";
  qBox.innerHTML = "?";
  let lettersArray = [];
  let status = false;
  let random = randomLetter();
  console.log(random);
  window.addEventListener("keydown", (e) => {
    let letter = e.key.toLowerCase();
    if (!status) {
      if (validEvent(letter)) {
        console.log(letter);
        if (letter === random) {
          qBox.innerHTML = letter;
          gameStatus.innerHTML = "Right Answer!";
          gameStatus.style.color = "green";
          status = true;
          playAgian.style.visibility = "visible";
          playAgian.style.opacity = "1";
          letterPickedContainer.innerHTML = " ";
          gameReset();
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
};

game();

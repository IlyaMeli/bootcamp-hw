const doubleValues = (arr) => {
  return arr.map((e) => e * 2);
};

const onlyEven = (arr) => {
  let res = [];
  arr.forEach((element) => {
    if (element % 2 === 0) {
      res.push(element);
    }
  });
  return res;
};

const showFirstAndLast = (arr) => {
  let res = [];
  arr.forEach((element, i) => {
    if (i === 0 && typeof element === "string") {
      res.push(element.toString());
    }
    if (i === arr.length - 1 && typeof element === "string") {
      res.push(element.toString());
    }
  });
  return res;
};

const vowelCount = (string) => {
  string = string.toLowerCase();
  let stringArr = string.split("");
  let res = {};
  stringArr.forEach((letter, i) => {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      if (res[letter]) {
        res[letter]++;
      } else {
        res[letter] = 1;
      }
    }
  });
  return res;
};

const capitalize = (string) => {
  let stringArr = string.split("");
  let upperArr = stringArr.map((letter) => {
    return letter.toUpperCase();
  });
  return upperArr.join("");
};

const shiftLetter = (string) => {
  debugger;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("");
  let res = "";
  let stringArr = string.split("");
  stringArr.forEach((letter) => {
    if (alphabet[0] === letter) {
      res += "z";
    }
    if (
      alphabet[alphabet.indexOf(letter)] === letter &&
      alphabet[alphabet.indexOf(letter)] !== "a"
    ) {
      res += alphabet[alphabet.indexOf(letter) - 1];
    }
  });

  return res;
};

//didnt finish yet

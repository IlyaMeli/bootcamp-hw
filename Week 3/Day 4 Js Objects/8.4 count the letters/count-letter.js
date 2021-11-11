const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

let countLetter = (arr) => {
  let fixedArr = arr.join("").split(" ").join("").toLowerCase().split("");
  //i know it looks nuts, didnt want to use Regex;
  console.log(fixedArr);
  let letterObj = {};
  fixedArr.forEach((letter) => {
    letterObj[letter] = letterObj[letter] ? (letterObj[letter] += 1) : 1;
  });
  return letterObj;
};

console.log(countLetter(array));

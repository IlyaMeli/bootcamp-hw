function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    let capsArr = arr.map((word) => {
      if (typeof word !== "string") {
        reject("NOT A STRING!!!!");
      } else {
        return word.toUpperCase();
      }
    });
    resolve(capsArr);
  });
}

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    let sortedArr = arr.map((word) => {
      if (typeof word !== "string") {
        reject("NOT A STRING!!!!");
      }
      return word;
    });
    resolve(sortedArr.sort());
  });
}

makeAllCaps(["d", "b", "a"])
  .then((res) => sortWords(res))
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });

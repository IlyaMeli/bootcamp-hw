let arrLength = (arr) => {
  let newArr = [];
  arr.map((e) => {
    newArr.push(e.length);
  });
  return newArr;
};

console.log(arrLength(["boo", "doooo", "hoo", "ro"]));

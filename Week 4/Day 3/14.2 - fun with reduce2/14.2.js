let users = [
  {
    name: "Ron",
    lastName: "A Dvoron",
    age: 21,
  },
  {
    name: "Ilya",
    lastName: "Meli",
    age: 28,
  },
];

const extractOnlyValue = (arrOfObj, key) => {
  return arrOfObj.reduce((arrSum, curr) => {
    arrSum.push(curr[key]);
    return arrSum;
  }, []);
};

console.log(extractOnlyValue(users, "name"));
console.log(extractOnlyValue(users, "age"));

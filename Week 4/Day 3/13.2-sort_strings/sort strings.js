const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log(foods.sort());
console.log(foods.sort().reverse());

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
//ascending
console.log(
  foodsWithUpperCase.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
      return 1;
    }
    return 0;
  })
);
//descending
console.log(
  foodsWithUpperCase.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  })
);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

console.log(
  words.sort((a, b) => {
    return b.length - a.length;
  })
);

console.log(
  words.sort((a, b) => {
    return a.length - b.length;
  })
);

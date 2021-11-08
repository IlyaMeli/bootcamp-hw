// 3.3
let worldPopulation = 7900;
function percentageOfWorld1(population) {
  return ((population / worldPopulation) * 100).toFixed(5);
}

console.log(
  "China's Population is " + percentageOfWorld1(1441) + " precent of the world"
);
console.log(
  "Israel's Population is " +
    percentageOfWorld1(0.009) +
    " precent of the world"
);
console.log(
  "Russia's  Population is " +
    percentageOfWorld1(0.144) +
    " precent of the world"
);

// expression
let percentageOfWorld2 = function (population) {
  return ((population / worldPopulation) * 100).toFixed(5);
};
console.log(
  "China's Population is " + percentageOfWorld2(1441) + " precent of the world"
);
console.log(
  "Israel's Population is " +
    percentageOfWorld2(0.009) +
    " precent of the world"
);
console.log(
  "Russia's  Population is " +
    percentageOfWorld2(0.144) +
    " precent of the world"
);

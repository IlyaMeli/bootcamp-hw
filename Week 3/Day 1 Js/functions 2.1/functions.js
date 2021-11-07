function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} Million people and its capital city is ${capitalCity}`;
}

let isreal = describeCountry("Israel", 9, "Jerusalem");
let russia = describeCountry("Russia", 144.1, "Moscow");
let USA = describeCountry("USA", 329.5, "Washington");

console.log(isreal);
console.log(russia);
console.log(USA);

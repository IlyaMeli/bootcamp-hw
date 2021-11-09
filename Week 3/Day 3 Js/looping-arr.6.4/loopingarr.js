let populations = [9, 140, 329, 125];
let worldPopulation = 7800;

let populationPercentages = (population) => {
  let percentages = [];
  for (const item of population) {
    {
      percentages.push((item / worldPopulation).toFixed(3) * 100);
    }
  }
  return percentages;
};
console.log(populationPercentages(populations));

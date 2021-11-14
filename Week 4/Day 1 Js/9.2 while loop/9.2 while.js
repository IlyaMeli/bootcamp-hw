let populations = [9, 140, 329, 125];
let worldPopulation = 7800;

let populationPercentages = (population) => {
  let percentages = [];
  let i = 0;
  while (i < population.length) {
    percentages.push((population[i] / worldPopulation).toFixed(3) * 100);
    i++;
  }

  return percentages;
};

console.log(populationPercentages(populations));

//the for loop way is much more elegant in my opinion.

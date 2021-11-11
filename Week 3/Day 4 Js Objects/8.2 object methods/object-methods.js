const myCountry = {
  country: "Israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: "9 Million",
  neighbours: ["Egypt", "Jordan", "Syria", "Lebanon"],
  descibe() {
    console.log(
      `${this.country} has ${this.population} people, their mother tongue is ${this.language},they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland() {
    !this.neighbours ? (this.island = false) : (this.island = true);
  },
};

myCountry.descibe();
myCountry.checkIsland();
console.log(myCountry);

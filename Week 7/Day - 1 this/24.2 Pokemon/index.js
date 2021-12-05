function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

let pikachu = new Pokemon("Pikachu", "Electric", [
  "shock",
  "tackle",
  "electric-blast",
]);
let charmander = new Pokemon("Charmander", "Fire", [
  "ember",
  "fire-storm",
  "tail-bump",
]);
let balbazor = new Pokemon("Balbazor", "Leaf", [
  "forest",
  "leaf-scream",
  "super-ray",
]);

Pokemon.prototype.callPokemon = function () {
  return this.name + ", I choose you!";
};

Pokemon.prototype.attack = function (num) {
  return this.name + " used: " + this.attackList[num];
};

console.log(charmander.callPokemon());
console.log(charmander.attack(2));

console.log(pikachu.callPokemon());
console.log(pikachu.attack(1));

console.log(balbazor.callPokemon());
console.log(balbazor.attack(0));

const hero = {
  health: 5,
  power: 68,
  getStrength: function (a, b) {
    if (this.health <= 5) {
      return this.power - a + b;
    } else return this.power;
  },
};

function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else {
    return "You are stronger";
  }
}

const newGetStrength = hero.getStrength.bind(hero);
console.log(whoIsStronger(newGetStrength));

// call invoce the func with specific this
const newGetStrength2 = hero.getStrength;
console.log(newGetStrength2.call(hero, 5, 8));
console.log(newGetStrength2.apply(hero, [5, 8]));

const calcAvg = (game1, game2, game3) => {
  let gamesPlayed = 3;
  return (game1 + game2 + game3) / gamesPlayed;
};

let johnTeam = calcAvg(20, 10, 20);
let mikeTeam = calcAvg(20, 20, 10);
let maryTeam = calcAvg(20, 10, 20);

console.log(johnTeam);
console.log(mikeTeam);
console.log(maryTeam);

if (johnTeam > mikeTeam && johnTeam > maryTeam) {
  console.log("John won with a score of :" + johnTeam);
} else if (mikeTeam < maryTeam) {
  console.log("Mary won with a score of :" + maryTeam);
} else if (mikeTeam > maryTeam) {
  console.log("Mike won with a score of :" + mikeTeam);
} else {
  console.log("its a Draw");
}

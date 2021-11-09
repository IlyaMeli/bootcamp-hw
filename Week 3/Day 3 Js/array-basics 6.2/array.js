const people = ["Greg", "Mary", "Devon", "James"];

// 1
// for (const name of people) {
//   console.log(name);
// }
// 2
people.shift();
// 3
people.pop();
// 4
people.unshift("Matt");
// 5
people.push("Ilya");
//6
// for (const name of people) {
//   if (name === "Mary") {
//     return;
//   }
//   console.log(name);
// }

let peopleArrCopy = people.slice(2);
// console.log(people.indexOf("Mary"));
// console.log(people.indexOf("foo"));
//10
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);
//11
let withBob = people.concat("Bob");
console.log(withBob);

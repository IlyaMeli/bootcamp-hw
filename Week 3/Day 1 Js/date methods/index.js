const date = new Date();

// 1
console.log(date.toLocaleString("en-US", { weekday: "long" }));
// 2
console.log(date.getDate());
// 3
console.log(date.toLocaleString("en-US", { month: "long" }));
// 4
console.log(date.getFullYear());

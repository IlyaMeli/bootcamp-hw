//1
const printToN = (n) => {
  for (var i = 0; i < n + 1; i++) {
    console.log(i);
  }
};
//2
const countX = (n, t) => {
  for (let i = 0; i < n; i++) {
    if (i % t == 0) {
      console.log(i);
    }
  }
};
//3
const countEven = (n) => {
  let counter = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      counter++;
    }
  }
  return counter;
};
console.log(countEven(28000000000031867848641521981));

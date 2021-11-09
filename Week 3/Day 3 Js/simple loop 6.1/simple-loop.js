const arr = [1, 7, 3, 0, -5, 7, 3, 9];

const arrayLength = (arr) => {
  let counter = 0;
  for (let i of arr) {
    counter++;
  }
  return counter;
};

const arraySum = () => {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
};
const arrayMult = () => {
  let mult = 0;
  for (let i of arr) {
    mult *= i;
  }
  if (mult === -0) {
    mult = 0;
  }
  return mult;
};

console.log("function Length", arrayLength(arr));
console.log("function Sum ", arraySum(arr));
console.log("function mult ", arrayMult(arr));

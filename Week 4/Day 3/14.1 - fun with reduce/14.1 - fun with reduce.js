let nums = [1, 2, 1, 6, 70, 2, 3, 505];
let max = nums.reduce((total, current) => {
  if (current > total) {
    total = current;
  }
  return total;
});

// console.log(max);

const sumEven = nums.reduce((total, current) => {
  return current % 2 == 0 ? total + current : total;
}, 0);

// console.log(sumEven);

const setAvg = nums.reduce((total, current, i) => (current + total) / i + 1);

// console.log(setAvg);

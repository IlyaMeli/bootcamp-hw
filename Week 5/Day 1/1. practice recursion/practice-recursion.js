//  Reverse Array *
const arrReverse = (arr) => {
  return arr.reverse();
};
// console.log(arrReverse(["h", "e", "l", "l", "o"]));

// with forEach
const arrReverseFor = (arr) => {
  for (i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }
  return arr;
};
// console.log(arrReverseFor(["h", "e", "l", "l", "o"]));
//with recursion
function reverseString4(str) {
  if (str.length <= 1) {
    return str[0];
  }
  let res = str.pop();
  res += reverseString4(str);
  return res;
}

//ex 4

function compute(n, p) {
  if (p === 1) return n;
  console.log(n + " and " + p);
  return (n *= compute(n, p - 1));
}

console.log(compute(2, 3));

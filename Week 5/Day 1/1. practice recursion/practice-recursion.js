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

//5
function binarySearch(arr, goal) {
  let start = 0;
  let end = arr.length - 1;
  while (true) {
    mid = Math.floor((start + end) / 2); // creating floored middle point
    if (goal === arr[mid]) {
      // exit statment.
      return mid;
    }
    if (goal > arr[mid]) {
      start = mid + 1;
    } else if (goal < arr[mid]) {
      end = mid - 1;
    }
  }
}

const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

console.log(binarySearch(arr, 23));

//recursion binary
function binarySearchRecursive(arr, goal, start = 0, end = arr.length - 1) {
  mid = Math.floor((start + end) / 2);
  if (goal === arr[mid]) {
    return mid;
  }
  if (goal > arr[mid]) return binarySearchRecursive(arr, goal, mid + 1, end);
  else if (goal < arr[mid])
    return binarySearchRecursive(arr, goal, start, mid - 1);
}

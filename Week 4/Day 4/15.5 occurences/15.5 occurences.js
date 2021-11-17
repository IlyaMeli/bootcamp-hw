function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
        counter ++;
        console.log(counter +1)
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));

// line 5 is the issue,
//  counter is allways re updates as 1 and not adding to itself
// .fixed with counter ++
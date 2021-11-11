let object1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};
let reverseObj = (obj) => {
  let obj2 = {};
  Object.entries(obj).forEach(([key, value]) => (obj2[value] = `${key}`));
  return obj2;
};

console.log(reverseObj(object1));

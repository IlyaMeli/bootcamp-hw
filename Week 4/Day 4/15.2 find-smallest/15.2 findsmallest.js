function findSmallest(a, b, c){
  if (a > b && c > b){
  return b;
  } else if (b > c && a > c) {
  return c;
 } else {
  return a;
  }
 }
 console.log(findSmallest(52,66, 2));



 // line 10 refrence error, findSmalest is not defind, type >>> findSmallest
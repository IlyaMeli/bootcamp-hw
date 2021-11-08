const gradeAssigner = (num) => {
  if (num > 100 || num < 0) {
    return "Invalid Input";
  }
  if (num >= 90 && num <= 100) {
    return "A";
  }
  if (num >= 80 && num < 90) {
    return "B";
  }
  if (num >= 70 && num < 80) {
    return "C";
  }
  if (num >= 65 && num < 70) {
    return "D";
  } else {
    return "F";
  }
};

console.log("expeted: A got: " + gradeAssigner(96));
console.log("expeted: B got: " + gradeAssigner(80));
console.log("expeted: C got: " + gradeAssigner(73));
console.log("expeted: D got: " + gradeAssigner(65));
console.log("expeted: F got: " + gradeAssigner(15));
console.log("expeted: Invalid got: " + gradeAssigner(604));

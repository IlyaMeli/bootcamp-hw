const leapYear = (year) => {
  if (year % 4 === 0 && year % 400 === 0) {
    return "A leap year";
  } else if (year % 100 === 0) {
    return "Not a leap year";
  } else if (year % 4 === 0) {
    return "A leap year";
  } else {
    return "Not a leap year";
  }
};

console.log("expected a leap: " + leapYear(2120));
console.log("expected a not a leap: " + leapYear(2100));
console.log("expected a leap year: " + leapYear(2140));

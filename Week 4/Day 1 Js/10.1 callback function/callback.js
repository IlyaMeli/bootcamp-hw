const isString = (str, func) => {
  if (typeof str === "string") {
    func(str);
  } else {
    console.log("False");
  }
};

isString("3", (str) => {
  console.log(str);
});

const firstWordUpperCase = (str, callback) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === " " || i === 0) {
      res += str[i].toUpperCase();
    } else {
      res += str[i];
    }
  }
  callback(res);
};

firstWordUpperCase("hello world", (str) => {
  console.log(str.split(" ").join("-"));
});
firstWordUpperCase("hello world", (str) => {
  if (typeof str === "string") {
    console.log("the value is a string");
  }
});

let returnType = (elemnet, callback) => {
  callback(elemnet);
  return typeof elemnet;
};

console.log(
  returnType(25, (el) => {
    if (typeof el === "number") {
      console.log(el.toString().length);
    } else {
      console.log(el.length);
    }
  })
);

//

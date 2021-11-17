function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
//the function will return undefined and 2,
//  because we're logging the
//  "undifiend" var which has no value,
// it is only declared on top
// a quick fix will be to move the variable
//  declaration to the top of the function
//or even change the var to let which will
// log the error to the console.
//Cannot access 'a' before initialization

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
var test = obj.prop.getFullName;
console.log(obj.prop.getFullName());
console.log(test());

// will return "Aurelio De Rosa", and then undifiend, dependes on of the Running environment.
// node - undifiend, global object wont add  global var
// browser - John, will add global var to Window Objects

console.log(funcB());
const funcB = () => {
  let b = 0;
  let a = b;
  a++;
  return a;
};
console.log(typeof a);
console.log(typeof b);

//b became global because we didnt declare it inside the function with let/var/const.
// solution to move the declare b out of the scope of the function.

//reading time for
// funcC + inside
// funcCB + inside
let funcC = () => {
  console.log("1");
};
funcC();
function funcC() {
  console.log("2");
}
funcC();
//the terminal will log 2 twice, the functions are hoisted,
//  and the second function overides the first one.

function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);

// -
// 1
// -
// -  not undifiend

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
// -undifiend - 1;

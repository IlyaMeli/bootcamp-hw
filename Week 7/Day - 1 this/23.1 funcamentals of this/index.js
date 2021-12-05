// Question 1: In your own words what will this point to and why?(Note this is the global scope)

console.log(this);
// This will point to the "GLOBAL/WINDOW" object,  console is a Method of the window object in that example

// Question 2: a. In your own words what will this point to and why. b. How can you fix this code.
const myObj = { name: "Timmy", greet: () => { console.log(`Hello ${this.name}`);
},
const myObj2 = { name: "Timmy", greet(){ console.log(`Hello ${this.name}`)}};
},
//because we declared the greet method as a arrowFunction, the arrowFunction doesnt have her own this,
//the this.name will point to the window object which in this case will result in undefined.
//to fix it we just change the method to a regular function.

// Question 3: In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
// reference to window inside a funcition

// Question 4: In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
// has no this so will reverence to the father which in this case i the window object

// Question 5: a. In your own words what will this point to and why. b. How can you fix this code.
document.querySelector(".element").addEventListener("click", function(){
  console.log(this);
});

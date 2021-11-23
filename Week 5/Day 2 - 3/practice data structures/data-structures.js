//stack -
class Stack {
  constructor() {
    this.array = new Array();
  }
  add(item) {
    this.array.push(item);
  }
  remove() {
    this.array.pop();
  }
}

//queue -
class Queue {
  constructor() {
    this.array = new Array();
  }
  add(item) {
    this.array.unshift(item);
  }
  remove() {
    this.array.pop();
  }
}

//linked list -

//
function checkValid(s) {
  let open = ["(", "{", "["];
  let close = [")", "}", "]"];
}

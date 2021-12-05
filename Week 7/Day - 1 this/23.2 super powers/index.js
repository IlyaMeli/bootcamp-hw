const storm = {
  superPower: "Flying",
  print() {
    superPower = this.superPower;
    printSuperPower();
  },
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.print();

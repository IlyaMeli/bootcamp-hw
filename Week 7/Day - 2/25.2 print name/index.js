let obj = {
  name: "Ilya",
  printName: function () {
    console.log(this.name);
  },
  printNameAfterSecond: function () {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000
    );
  },
};

obj.printNameAfterSecond();

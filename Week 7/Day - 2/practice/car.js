// const Car = function (brand, speed) {
//   this.brand = brand;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.brand + " is going at " + this.speed + " km/h");
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.brand + " is going at " + this.speed + " km/h");
// };

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.brand + " is going at " + this.speed + " km/h");
  }
  brake() {
    this.speed -= 5;
    console.log(this.brand + " is going at " + this.speed + " km/h");
  }
}

const bmw = new Car("Bmw", 30);
const honda = new Car("Honda", 90);

honda.brake();
honda.accelerate();

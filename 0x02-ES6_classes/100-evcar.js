import Car from './10-car.js';

// Define unique symbols for additional attributes
const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call parent constructor
    this[_range] = range;
  }

  // Getter for range
  get range() {
    return this[_range];
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    return new Car(this[_brand], this[_motor], this[_color]);
  }
}

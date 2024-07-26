export default class HolbertonClass {
  constructor(size, location) {
    // Validate the types of attributes
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    // Assign the private attributes
    this._size = size;
    this._location = location;
  }

  // Implement the valueOf method to enable casting to Number
  valueOf() {
    return this._size;
  }

  // Implement the toString method to enable casting to String
  toString() {
    return this._location;
  }
}

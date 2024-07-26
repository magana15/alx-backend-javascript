export default class Airport {
  constructor(name, code) {
    // Validate the types of attributes
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    // Assign the private attributes
    this._name = name;
    this._code = code;
  }

  // Override the toString() method
  toString() {
    return `[object ${this._code}]`;
  }
}

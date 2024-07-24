import divideFunction from './8-try';

describe('divideFunction', () => {
  test('should return the result of the division', () => {
    expect(divideFunction(10, 2)).toBe(5);
  });

  test('should throw an error when dividing by 0', () => {
    expect(() => divideFunction(10, 0)).toThrow('cannot divide by 0');
  });
});

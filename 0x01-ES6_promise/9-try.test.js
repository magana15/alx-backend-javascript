import guardrail from './9-try';
import divideFunction from './8-try';

describe('guardrail', () => {
  test('should return the result and guardrail message for successful execution', () => {
    const result = guardrail(() => divideFunction(10, 2));
    expect(result).toEqual([5, 'Guardrail was processed']);
  });

  test('should return the error message and guardrail message for failed execution', () => {
    const result = guardrail(() => divideFunction(10, 0));
    expect(result).toEqual(['Error: cannot divide by 0', 'Guardrail was processed']);
  });
});

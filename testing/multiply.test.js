const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 2 by 3', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('multiplies 0 by 5', () => {
    expect(multiply(0, 5)).toBe(0);
  });
});
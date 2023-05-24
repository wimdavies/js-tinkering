const fizzBuzz = require("./fizzBuzz");

describe('fizzBuzz', () => {
  it('returns fizz for numbers divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(18)).toBe('fizz');
  });

  it('returns buzz for numbers divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(20)).toBe('buzz');
  });

  it('returns fizzbuzz for numbers divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });

  it('returns number when none of the above is true', () => {
    expect(fizzBuzz(8)).toBe(8);
  });
});
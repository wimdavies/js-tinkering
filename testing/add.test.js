const add = require('./add');

describe('add', () => {
  // test cases
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('adds 0 and 5', () => {
    expect(add(5, 0)).toBe(5);
  });
});

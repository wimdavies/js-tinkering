const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns Mars and Malteasers when given "Ma" and 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });

  it('returns Mars and Malteasers when given "ma" and 10', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });

  it('returns Mars when max lowered to 2', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });

  it('returns Skitties, Skittles and Starburst when given "S" and 10', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it('returns Skitties and Skittles whenmax lowered to 4', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });
});


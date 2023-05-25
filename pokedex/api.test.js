const fetchPokemon = require('./api.js');

describe('#fetchPokemon', () => {
  
  // using the done function as a parameter 
  it('returns a promise of the useful pokemon data', (done) => {
    fetchPokemon('charizard')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(6);
        done();
      });
  });

  // alternatively, by returning the promise
  it('returns a promise of the useful pokemon data', () => {
    return fetchPokemon('charizard')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(6);
      });
  });
})
const fetchPokemon = require('./api');

class Pokedex {
  constructor() {
    this.pokemon = [];
  }

  all() {
    return this.pokemon;
  }

  catch(name) {
    return fetchPokemon(name)
      .then((pokemon) => {
        this.pokemon.push(pokemon);
      });

      //   console.log('Caught: ', pokemon);
      // });
  
  }
}

module.exports = Pokedex
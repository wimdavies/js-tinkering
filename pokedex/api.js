const extractData = (data) => {
  const pokemon = {};

  pokemon.name = data.name;
  pokemon.id = data.id;
  pokemon.height = data.height;
  pokemon.weight = data.weight;
  pokemon.types = data.types.map((number) => number.type.name);

  return pokemon;
}

const fetchPokemon = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
          return response.json()
      })
      .then((data) => {
        return extractData(data)
      })
}

// alternatively, without a callback function:
// const fetchPokemon = (name) => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//       .then((response) => {
//           return response.json()
//       })
//       .then((data) => {
//         return {
//           name: data.name,
//           id: data.id,
//           height: data.height,
//           weight: data.weight
//           types: data.types.map((number) => number.type.name);
//         }
//       })
// }

module.exports = fetchPokemon;
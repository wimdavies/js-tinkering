const Pokedex = require('./pokedex');

describe('Pokedex', () => {
  it('#all returns an empty array when no pokemon caught', () => {
    const pokedex = new Pokedex;

    expect(pokedex.all()).toEqual([]);
  });

  it("catches a pokemon and adds it to the pokedex", () => {
    const pokedex = new Pokedex();
    pokedex.catch("pikachu").then(() => {
      expect(pokedex.all()[0].name).toBe("pikachu");
    });
  });

  it('#all returns an array of #catch-input pokemon', () => {
    const pokedex = new Pokedex;

    pokedex.catch('bulbasaur').then(() => {
      pokedex.catch('pikachu').then(() => {
        expect(pokedex.all()[0].name).toBe("bulbasaur");
        expect(pokedex.all()[1].name).toBe("pikachu");
      });
    });
  });
});
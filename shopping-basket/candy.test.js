const Candy = require('./candy')

describe('Candy', () => {
    it('returns candy name', () => {
        const result = new Candy('Mars', 2.99)
        expect(result.name).toBe('Mars')
    });
    
    it('returns candy price', () => {
        const result = new Candy('Mars', 2.99)
        expect(result.price).toBe(2.99)
    });
});
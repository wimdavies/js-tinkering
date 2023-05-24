const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
    it('returns 0 total price when no items added', () => {
        let result = new ShoppingBasket();

        expect(result.getTotalPrice()).toBe(0);
    })
   
    it('returns total price when one item added', () => {
        const fakeCandy = {
            getPrice: () => 2.99
          }
        const basket = new ShoppingBasket();

        basket.addItem(fakeCandy);

        expect(basket.getTotalPrice()).toBe(2.99);
    })
    
    it('returns total price when multiple items added', () => {
        const fakeCandy = {
            getPrice: () => 2.99
          }
        const fakeCandyTwo = {
          getPrice: () => 2.99
        }
        const basket = new ShoppingBasket();
        
        basket.addItem(fakeCandy);
        basket.addItem(fakeCandyTwo);

        expect(basket.getTotalPrice()).toBe(5.98);
    })

    it('discounts total price by the given amount', () => {
      const fakeCandy = {
          getPrice: () => 2.99
        }

      const fakeCandyTwo = {
        getPrice: () => 2.99
      }

      const basket = new ShoppingBasket();

      basket.addItem(fakeCandy);
      basket.addItem(fakeCandyTwo);

      basket.applyDiscount(1);

      expect(basket.getTotalPrice()).toBe(4.98);
  })
})
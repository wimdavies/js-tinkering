const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.contents = []
  }

  addItem(candy) {
    this.contents.push(candy);
  }

  getTotalPrice() {
    let sum = 0 
    this.contents.forEach(
      candy => sum += candy.getPrice()
    )
    return sum;
  }
}

module.exports = ShoppingBasket

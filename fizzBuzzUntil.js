const fizzBuzz = require('./fizzBuzz');

const fizzBuzzUntil = (number) => {
  let i = 1

  while (i <= number) {
    console.log(fizzBuzz(i));

    i += 1;
  }
}

module.exports = fizzBuzzUntil
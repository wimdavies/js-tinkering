const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const message = (element) => {
  return `Hi ${element.name}! ${element.discount}% off our best candies for you today!`
}

const generateMessages = (array) => {
  return array.map(message)
}

console.log(generateMessages(namesAndDiscounts));